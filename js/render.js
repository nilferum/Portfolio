const renderers = {
    languages:  renderTags,             // ul + liをタグ風の見た目にするチップUI
    tools:      renderTags,
    fonts:      renderTags,
    assets:     renderTags,
    duration:   renderTableHours,       // dt + ddをリーダー罫で繋ぐUI
                                        // 表にない項目はrenderProseとして処理される。
};

function el(tag, className, ...children) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.append(...children);
    return node;
}

// ============================================================
// Prose, Tags, Table共通
// ============================================================

// Proseか、Prose以外か。(ローランド方式)
function renderCell(key, value) {
    const render = renderers[key] ?? renderProse;
    return render(key, value);
}

// 疑似的なdiv(dl.info-cell)と疑似的なheading(dt.info-subject)を生成し、それ以外の中身はrender{Prose/Tagsなど}に任せる関数
function cell(key, ...children) {
    return el('dl', 'info-cell', el('dt', 'info-subject', key), ...children);
}

// ============================================================
// Prose
// ============================================================

// 疑似的なpをdd.info-textとして生成し、mapで並べる
function renderProse(key, texts) {
    return cell(key, ...texts.map(text => el('dd', 'info-text', text)));
}

// ============================================================
// Tags
// ============================================================

// ul.info-tagsの中にliを並べる
function renderTags(key, tags) {
    const items = tags.map(tag => {
        const open = tag.lastIndexOf('(');
        if (open < 0 || !tag.endsWith(')')) return el('li', '', tag);

        return el('li', '',                                 // 末尾に()があるときだけspan.info-tags__subを付け、CSSでopacityを変更させる
            tag.slice(0, open),
            el('span', 'info-tags__sub', tag.slice(open)),
        );
    });

    return cell(key, el('dd', 'info-data', el('ul', 'info-tags', ...items)));
}

// ============================================================
// Table
// - TableHours : 事柄-時間のペア用
// ============================================================

// ☆TableHours
// dl.info-table.info-table--hoursを作り、dt+ddのペアをforEachで並べる
function renderTableHours(key, rows) {
    const table = el('dl', 'info-table info-table--hours');

    rows.forEach(row => {
        // {integer}.{fraction}の形式で、小数点第一位が0でも表示
        const [integer, fraction] = row.hours.toFixed(1).split('.');

        table.append(
            el('dt', '', row.name),
            // dd(時間)全体をinfo-numberで囲み、小数部分(60分未満)はinfo-number__fracで囲む。CSSスタイリング用。単位記号はCSSのpseudo要素で担当
            el('dd', '', el('span', 'info-number', integer, el('span', 'info-number__frac', `.${fraction}`))),
        );
    });

    return cell(key, el('dd', 'info-data', table));
}

// ============================================================
// Links
// ============================================================

// div.info-links>{a.info-link>img.icon}*nを生成する
function renderLinks(links) {
    const anchors = links.map(link => {
        const a     = el('a', 'info-link');
        const img   = el('img', 'icon');

        a.href              = link.href;
        a.target            = '_blank';                 // 新しいウィンドウで開く
        a.rel               = 'noopener noreferrer';
        a.ariaLabel         = link.ariaLabel;
        a.dataset.tooltip   = link.label;               // Tooltipに表示される文言。HTMLアイコンなら"Demosite"、GitHubアイコンなら"GitHub"など
        img.src             = link.icon;
        img.alt             = link.alt;

        a.append(img);
        return a;
    });

    return el('div', 'info-links', ...anchors);
}

// ============================================================
// General
// ============================================================

// 上で作ったデータセルをグルーピングし、縦書きのheadingと一緒にセットにする
// div.info-group > h3.info-heading + n-CELLS
function renderGroup(heading, cells) {
    const body = el('div', 'info-body', ...Object.entries(cells).map(([key, value]) => renderCell(key, value)));
    return el('div', 'info-group', el('h3', 'info-heading', heading), body);
}

// 上記のGroupを更に束ねてscriptに渡す。nodesはnodeと役割が異なることに注意
export function renderDetail(work) {
    const nodes = Object.entries(work.detail).map(([heading, cells]) => renderGroup(heading, cells));
    if (work.links?.length) nodes.push(renderLinks(work.links));
    return nodes;
}
