export const work2 = {
    id          : "work-02",
    title       : "Sipsprs",
    category    : ["Direct", "Design", "Coding"],
    description : "脱･食べログをコンセプトに、\n架空のバーのサイトを制作しました。",
    image       : "images/02-sipsprs.webp",
    url         : "https://adachigeorge.com/sipsprs/",
    infoHTML    : `
        <div class="info-group">
            <h3 class="info-heading">overview</h3>
            <div class="info-body">
                <dl class="info-cell">
                    <dt class="info-subject">target</dt>
                    <dd class="info-text">20代カップル（予約・シェア訴求）</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">issues 1</dt>
                    <dd class="info-text">予約導線を食べログに依存しておりそのランニングコストが重かったこと。<br>
                    (およそ80,000から90,000円/月程度差し引かれていると想定)</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">issues 2</dt>
                    <dd class="info-text">Instagramから導線である程度客数自体は確保できているが、新規客が多く、今後の経営継続に懸念を抱えている。</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">approach</dt>
                    <dd class="info-text">自店サイトを持ち予約導線を分散させることで依存脱却を目指しつつ、自店ブランドイメージを構築。</dd>
                    <dd class="info-text">リピーター確保の為にはまず記憶に残る為のインパクトが重要だと考え、競合店舗との視覚的/情緒的な差別化を図る。</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">therefore</dt>
                    <dd class="info-text">フォントの雰囲気や使い方、挑戦的なレイアウトで他のサイトとの印象の差別化を最優先する。</dd>
                    <dd class="info-text">20代が好むモダンでわかりやすいサイト構造と、ほどよい高級感をバランス良く両立させる。</dd>
                </dl>
            </div>
        </div>

        <div class="info-group">
            <h3 class="info-heading">highlight</h3>
            <div class="info-body">
                <dl class="info-cell">
                    <dt class="info-subject">performance</dt>
                    <dd class="info-text">どのサイトでもそうあるべきだと思っていますが、ユーザー層が仕事帰りや電車などで調べてアクセスするサイトである想定から。フォントのサブセット化、画像の容量削減(グレースケール化、適切な解像度、webp化)などパフォーマンスを優先しつつ、限られたリソースを有効活用することを意識してデザインを行いました。</dd>
                    <dd class="info-text">具体的にはコンセプト(文字だけのセクション)を挟んでから画像が多いセクションに突入する、数十から数百KB程度のファイルを小さく配置しても違和感を覚えさせないように、ランダムに配置を散らすなど。</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">typography</dt>
                    <dd class="info-text">店舗の｢平均よりやや高価｣というトーンをモダンな雰囲気に馴染ませるためタイポグラフィに工数をかけました。<br>
                    通常のGoogle Fontsのテーブルにはないpaltを使用することによる約物の詰めの調整、セクション毎の文章の重さに合わせたlsのツメ･開き、同じ視覚的ヒエラルキーに異なるフォントを用いつつ、フォント間の大きさの印象を揃えるためのfz、錯視調整の為にこまかいpadding/marginの調整などを行っています。</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">visual flow</dt>
                    <dd class="info-text">予約導線の新設がサイト開設の理由であるが、ターゲット層的にfixed buttonなどによる予約ボタンの強調などあまりにも露骨なアプローチを取ると逆効果だと思ったので、固定ヘッダーにghost buttonとして設置した上で、セクションに対しての視点の動きを考慮した上で(menuなら商品名で動いた目がサムネイルで一旦止まって次の商品名に移るなど)ボタンが何度か視界の中に入ってくるような動きを想定して構築しました。</dd>
                </dl>
            </div>
        </div>

        <div class="info-group">
            <h3 class="info-heading">tech &amp; period</h3>
            <div class="info-body">
                <dl class="info-cell">
                    <dt class="info-subject">language</dt>
                    <dd class="info-text">HTML &amp; CSS (+SCSS)</dd>
                    <dd class="info-text">JavaScript (+GSAP / ScrollTrigger)</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">tools</dt>
                    <dd class="info-text">Photoshop / アセット作成</dd>
                    <dd class="info-text">Fonttools(Python) / フォントサブセット化</dd>
                    <dd class="info-text">Crushee / Webp化</dd>
                    <dd class="info-text">VSCode / コーディング</dd>
                    <dd class="info-text">Git, GitHub / バージョン･Issue管理</dd>
                    <dd class="info-text">Notion, Eagle / 進捗･アセット管理 + SS</dd>
                    <dd class="info-text">Firefox ED DevTool / Grid調整</dd>
                </dl>
            </div>
        </div>

        <div class="info-links">
            <a class="info-link" href="https://adachigeorge.com/sipsprs" target="_blank" rel="noopener noreferrer" aria-label="Open Demo" data-tooltip="Demosite">
                <img class="icon" src="images/html.svg" alt="demo">
            </a>
            <a class="info-link" href="https://github.com/nilferum/sipsprs" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub" data-tooltip="GitHub">
                <img class="icon" src="images/github.svg" alt="GitHub Repository">
            </a>
            <a class="info-link" href="https://pagespeed.web.dev/analysis?url=https://adachigeorge.com/sipsprs/" target="_blank" rel="noopener noreferrer" aria-label="Open Lighthouse Analysis" data-tooltip="Lighthouse Score">
                <img class="icon" src="images/lighthouse.svg" alt="Lighthouse score">
            </a>
        </div>
    `
};
