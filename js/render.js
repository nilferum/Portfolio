// work*.json の detail と links から、モーダルの中身(DOM)を組み立てる

function el(tag, className, ...children) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.append(...children);                               // 文字列は文字として入る(HTMLとして解釈されない)
    return node;
}

function cell(key, ...children) {                           // 項目名(dt) + 中身(dd)を包む、全項目共通の外枠
    return el('dl', 'info-cell', el('dt', 'info-subject', key), ...children);
}

function renderProse(key, texts) {
    return cell(key, ...texts.map(text => el('dd', 'info-text', text)));
}

function renderTags(key, tags) {
    const items = tags.map(tag => {
        const open = tag.lastIndexOf('(');
        if (open <= 0 || !tag.endsWith(')')) return el('li', '', tag);

        return el('li', '',                                 // 末尾の括弧だけを span で包む
            tag.slice(0, open),
            el('span', 'info-tags__sub', tag.slice(open)),
        );
    });

    return cell(key, el('dd', 'info-data', el('ul', 'info-tags', ...items)));
}

function renderTableHours(key, rows) {
    const table = el('dl', 'info-table info-table--hours');

    rows.forEach(row => {
        const [int, frac] = row.hours.toFixed(1).split('.');    // 2 → '2.0' → ['2', '0']

        table.append(
            el('dt', '', row.name),
            el('dd', '', el('span', 'info-number', int, el('span', 'info-number__frac', `.${frac}`))),
        );
    });

    return cell(key, el('dd', 'info-data', table));
}

const renderers = {
    language:   renderTags,
    tools:      renderTags,
    fonts:      renderTags,
    assets:     renderTags,
    period:     renderTableHours,
};

function renderCell(key, value) {
    const render = renderers[key] ?? renderProse;           // 対応表にない項目は散文
    return render(key, value);
}

function renderGroup(heading, cells) {
    const body = el('div', 'info-body', ...Object.entries(cells).map(([key, value]) => renderCell(key, value)));
    return el('div', 'info-group', el('h3', 'info-heading', heading), body);
}

function renderLinks(links) {
    const anchors = links.map(link => {
        const a     = el('a', 'info-link');
        const img   = el('img', 'icon');

        a.href              = link.href;
        a.target            = '_blank';
        a.rel               = 'noopener noreferrer';
        a.ariaLabel         = link.ariaLabel;
        a.dataset.tooltip   = link.label;
        img.src             = link.icon;
        img.alt             = link.alt;

        a.append(img);
        return a;
    });

    return el('div', 'info-links', ...anchors);
}

export function renderDetail(work) {
    const nodes = Object.entries(work.detail).map(([heading, cells]) => renderGroup(heading, cells));
    if (work.links?.length) nodes.push(renderLinks(work.links));
    return nodes;
}
