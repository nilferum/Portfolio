export const work1 = {
    id          : "work-01",
    title       : "Portfolio",
    category    : ["Direct", "Design", "Coding"],
    description : "自身の成果物を見せる場として、\nポートフォリオサイトを作りました。",
    image       : "images/01-mockup.webp",
    url         : "https://adachigeorge.com/portfolio/",
    infoHTML    : `
        <div class="info-group">
            <h3 class="info-heading">overview</h3>
            <div class="info-body">
                <dl class="info-cell">
                    <dt class="info-subject">target</dt>
                    <dd class="info-text">採用担当者さま</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">objective</dt>
                    <dd class="info-text">短時間で自分のスキルセットを把握してもらうこと</dd>
                    <dd class="info-text">働いたときのイメージを持っていただくこと</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">approach</dt>
                    <dd class="info-text">コンテンツにすぐアクセスできる</dd>
                    <dd class="info-text">個性を垣間見せる</dd>
                    <dd class="info-text">コーディングスキルを提示する</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">therefore</dt>
                    <dd class="info-text">シンプルかつミニマムなレイアウト</dd>
                    <dd class="info-text">情緒的希薄さをカバーしつつ、個性を打ち出すために色数を絞ったパーソナルカラーを使う</dd>
                    <dd class="info-text">自分がユーザー視点で感じる｢気持ちよさ｣をCSS AnimationやJavaScriptの組み合わせで表現する</dd>
                </dl>
            </div>
        </div>

        <div class="info-group">
            <h3 class="info-heading">highlight</h3>
            <div class="info-body">
                <dl class="info-cell">
                    <dt class="info-subject">my reckon</dt>
                    <dd class="info-text">デザインや技術の力量、どんな実装を行っているか、はサイト自体で見てもらうのが一番手っ取り早く、誠実だと考えました。</dd>
                    <dd class="info-text">他方、そこに至る過程や｢なぜそれを採用したのか｣という考え方の部分こそ言語化するべきだと考え、そこから｢文字を読んでもらうためのサイト｣と定義し、逆算的にデザインを設計しました。</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">challenge</dt>
                    <dd class="info-text">文章が主役になるレイアウト</dd>
                    <dd class="info-text">カルーセル+モーダルのUXをどうカバーするか</dd>
                    <dd class="info-text">シンプルさの負の側面にどうアプローチするか</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">struggle</dt>
                    <dd class="info-text">当初バニラ想定だったため命名規則のバラつきが生じ、管理･確認に時間を取られたこと</dd>
                    <dd class="info-text">カルーセルとモーダルを組み合わせたことで実装の複雑さやUXの調整に想定以上の工数がかかったこと</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">reflection</dt>
                    <dd class="info-text">実装/工数のトレードオフについて、情報設計段階でのより深い考察が必要だと感じたこと</dd>
                    <dd class="info-text">コーディングスキルのショーケースとして設計したため、牛刀割鶏的な実装になってしまったこと</dd>
                    <dd class="info-text">シンプルさをアニメーションで補完を狙うアプローチは有効に機能したと推測</dd>
                </dl>
            </div>
        </div>

        <div class="info-group">
            <h3 class="info-heading">tech &amp; period</h3>
            <div class="info-body">
                <dl class="info-cell">
                    <dt class="info-subject">language</dt>
                    <dd class="info-text">HTML &amp; CSS (+SCSS)</dd>
                    <dd class="info-text">JavaScript (+Splide)</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">language::note</dt>
                    <dd class="info-text">// 小規模制作と考えていた為、最初はCSSはバニラで書いていたのですが、モーダル管理の為にCSSが肥大化したためSCSSを導入しました。</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">tools</dt>
                    <dd class="info-text">Illustrator / アセット作成</dd>
                    <dd class="info-text">Figma / ワイヤフレーム作成</dd>
                    <dd class="info-text">VSCode / コーディング</dd>
                    <dd class="info-text">Git, GitHub / バージョン･Issue管理</dd>
                    <dd class="info-text">Notion, Eagle / 進捗･アセット管理 + SS</dd>
                    <dd class="info-text">Firefox ED DevTool / Grid調整</dd>
                </dl>
                <dl class="info-cell">
                    <dt class="info-subject">period</dt>
                    <dd class="info-text">情報設計 : 1.5h</dd>
                    <dd class="info-text">デザイン : 2.0h</dd>
                    <dd class="info-text">コーディング : 12.0h</dd>
                    <dd class="info-text">その他修正 : 15.0h</dd>
                </dl>
            </div>
        </div>

        <div class="info-links">
            <a class="info-link" href="https://adachigeorge.com/portfolio" target="_blank" rel="noopener noreferrer" aria-label="Open Demo" data-tooltip="Demosite">
                <img class="icon" src="images/html.svg" alt="demo">
            </a>
            <a class="info-link" href="https://github.com/nilferum/Portfolio" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub" data-tooltip="GitHub">
                <img class="icon" src="images/github.svg" alt="GitHub Repository">
            </a>
            <a class="info-link" href="https://pagespeed.web.dev/analysis?url=https://adachigeorge.com/portfolio/" target="_blank" rel="noopener noreferrer" aria-label="Open Lighthouse Analysis" data-tooltip="Lighthouse Score">
                <img class="icon" src="images/lighthouse.svg" alt="Lighthouse score">
            </a>
        </div>
    `
};