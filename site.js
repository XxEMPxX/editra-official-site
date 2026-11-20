const copy = {
  ja: {
    skip:"本文へ移動", menu:"メニュー", navFeatures:"機能", navDownload:"ダウンロード", navGuide:"インストール", navRelease:"リリース情報", navSupport:"FAQ・サポート", getBeta:"ベータ版を見る",
    heroEyebrow:"Editra v0.6.0 Open Beta", heroLede:"映像、音、テキストをひとつのタイムラインで。Editraで、アイデアを自分のリズムでつなげよう。", exploreDownload:"ダウンロードを見る", exploreFeatures:"機能を知る", betaMeta:"Open Beta · Free · Apple Silicon", illustrationNote:"画面イメージ · 製品スクリーンショットではありません", chipText:"カットをつないで、物語に", heroBottom:"YOUR STORY, FRAME BY FRAME",
    introKicker:"MAKE ROOM FOR THE IDEA", introTitle:"編集の流れを、<br>ひとつの場所に。", introBody:"素材を読み込み、タイムラインで組み立て、プレビューで確かめる。Editraは、映像づくりの基本を落ち着いて進められるデスクトップエディターです。", seeHow:"できることを見る", stepImport:"素材を集める", stepImportBody:"動画、音声、静止画をプロジェクトに読み込む。", stepArrange:"タイムラインで整える", stepArrangeBody:"クリップを並べ、分割し、テキストや効果を加える。", stepExport:"作品を書き出す", stepExportBody:"プレビューで確認し、MP4として出力する。",
    featuresKicker:"TOOLS FOR YOUR CUT", featuresTitle:"必要な道具を、<br>迷わず使える場所へ。", featuresIntro:"シンプルな編集フローに、作品を仕上げるための基本機能を。", featureTimeline:"タイムライン編集", featureTimelineBody:"複数トラックに素材を配置。移動、トリミング、分割、並べ替えをひとつの画面で。", featureText:"テキストと表現", featureTextBody:"タイトルや字幕風のテキストクリップに、位置・色・サイズ・アニメーションを設定。", featureEffects:"エフェクトとトランジション", featureEffectsBody:"明るさ、コントラスト、彩度、ぼかしなど、実装済みの効果をタイムラインに。", featureExport:"プレビューからMP4へ", featureExportBody:"編集内容をプレビューで確認し、書き出しの進行状況を見ながらMP4を作成。", featureFootnote:"機能の詳細と対応範囲は、今回のOpen Betaではテンプレート機能を提供しません。",
    downloadKicker:"CHOOSE YOUR PLATFORM", downloadTitle:"Editraを迎える準備を。", downloadIntro:"無料ベータ版。macOS 15.0以降・Apple Silicon arm64向けです。公開承認までダウンロードは無効です。", detectedLabel:"お使いの環境", platformGroup:"OSを選択", statusPreparing:"公開承認待ち", macRequirement:"macOS 15.0以降 · Apple Silicon arm64", downloadUnavailable:"公開承認待ち", downloadNote:"DMGは用意済みです。対応ソース・通知・利用条件の承認と公開URL設定が完了するまでダウンロードは無効です。ライセンス資料は下のリンクから確認できます。", integrityPending:"SHA-256", pending:"未設定", downloadReady:"DMGをダウンロード", readyNote:"公開版です。展開前に掲載されたSHA-256を照合してください。", unsignedWarning:"この配布版はad-hoc署名のみで、Developer ID署名・公証はありません。配布元とSHA-256を確認してください。", notarizationWarning:"この配布版は公証されていません。配布元とSHA-256を確認してください。", statusReady:"公開中", statusComingSoon:"近日対応予定", windowsRequirement:"Windows版は開発中です。", futureFormats:"将来の提供形式", comingSoon:"Coming Soon", windowsNote:"公開日・ダウンロードURLは未定です。", statusPlanned:"計画中", linuxRequirement:"Linux版は今後の対応を計画しています。", planned:"Planned", linuxNote:"公開日・ダウンロードURLは未定です。", downloadFooter:"DMG、第三者通知、対応ソースと再リンク資料をこの公式サイトから提供する構成です。必要なライセンス判断と公開承認が完了するまで、ダウンロードボタンは無効です。", viewRelease:"Editra公式サイトを見る", cardReleaseNotes:"Release notes", cardInstallGuide:"Installation guide", cardLicenses:"第三者ライセンス・ソース", cardTerms:"利用条件", cardPrivacy:"プライバシー", cardContact:"問い合わせ",
    guideKicker:"INSTALL WITH CARE", guideTitle:"迷わず始めるための、<br>インストールガイド。", guideIntro:"初回Open BetaはmacOS 15以降・Apple Silicon arm64向けです。現在は公開ダウンロードを準備中です。", requirementsTitle:"対応環境", installStep1:"DMGをダウンロードして確認", installStep1Body:"この公式サイトからDMGを取得し、掲載されたSHA-256と一致することを確認してください。配布元やハッシュを確認できない場合は開かないでください。", installStep2:"展開してApplicationsへ", installStep2Body:"DMGを開き、EEDT.appをApplicationsフォルダへドラッグします。", installStep3:"初回起動とmacOSの警告", installStep3Body:"現在の配布方針ではDeveloper ID署名・Apple公証を行わない予定です。Developer ID署名・公証がなく、ad-hoc署名のみのため、macOSが開発元を確認できない警告を表示する場合があります。配布元とSHA-256を確認でき、安全性を自分で判断した場合に限り、まず一度アプリを開いてから、システム設定 > プライバシーとセキュリティ > セキュリティ欄の「このまま開く」を使い、このアプリだけを個別に許可できます。表示はmacOSのバージョンで異なる場合があります。", securityTitle:"安全のために", securityBody:"Appleがマルウェアを検出した、アプリが破損・改変された、または配布元やハッシュを確認できない場合は開かないでください。Gatekeeper、SIP、Mac全体の保護設定を無効化する方法は案内しません。個別アプリの例外についてはAppleの手順を確認してください。", appleGuide:"Appleの公式ガイド",
    releaseKicker:"WHAT'S IN THE BETA", releaseTitle:"Release notes", releaseIntro:"v0.6.0 · macOS Open Beta · 無料", releaseStatus:"公開準備中", releaseEntryTitle:"編集の基本をひとつに", releaseItem1:"動画・音声・静止画を読み込み、複数トラックで編集", releaseItem2:"移動、トリミング、分割、テキスト、エフェクト、トランジション", releaseItem3:"プロジェクトの保存・再読み込みとMP4書き出し", releaseFootnote:"macOS 15.0以降、Apple Silicon arm64向け。テンプレート機能は対象外です。プロジェクトのメディア参照は絶対パスです。",
    faqKicker:"QUESTIONS, ANSWERED", faqTitle:"FAQ / Support", faqIntro:"対応OS、配布状況、ベータ版について。", supportPrompt:"問い合わせ先：<a href=\"mailto:editra-support.empathy868@simplelogin.com\">editra-support.empathy868@simplelogin.com</a>。利用規約とプライバシー案内は未承認です。", faq1Q:"macOS 12やIntel Macで使えますか？", faq1A:"初回Open Betaの対象はmacOS 15.0以降のApple Silicon（arm64）です。macOS 12とIntel Macは対象外です。", faq2Q:"Windows版やLinux版はありますか？", faq2A:"Windows版は開発中、Linux版は計画中です。現時点ではダウンロードできる公開ビルドはありません。", faq3Q:"編集プロジェクトはどこに保存されますか？", faq3A:"プロジェクトはローカルに保存できます。メディア参照は絶対パスを使うため、別のMacやOSへ移す場合は素材の再リンクが必要になることがあります。", faq4Q:"ベータ版の既知の制限はありますか？", faq4A:"テンプレート機能は今回のベータ対象外です。プロジェクトはメディアへの絶対パスを保存するため、別のMacへ移すと素材の再リンクが必要な場合があります。対応環境はmacOS 15以降のApple Siliconです。", footerTagline:"Create without limits.", footerStatus:"Open Beta · 配布準備中", backTop:"トップへ ↑"
  },
  en: {
    skip:"Skip to content", menu:"Menu", navFeatures:"Features", navDownload:"Download", navGuide:"Install", navRelease:"Release notes", navSupport:"FAQ / Support", getBeta:"Explore beta",
    heroEyebrow:"Editra v0.6.0 Open Beta", heroLede:"Footage, sound, and titles on one timeline. Shape an idea at your own pace with Editra.", exploreDownload:"Explore downloads", exploreFeatures:"Explore features", betaMeta:"Open Beta · Free · Apple Silicon", illustrationNote:"Illustrative interface · not a product screenshot", chipText:"Join the cuts. Find the story.", heroBottom:"YOUR STORY, FRAME BY FRAME",
    introKicker:"MAKE ROOM FOR THE IDEA", introTitle:"Your editing flow,<br>all in one place.", introBody:"Bring in your media, arrange it on a timeline, and check the result in preview. Editra is a desktop editor for moving through the essentials of making a video.", seeHow:"See what you can do", stepImport:"Bring in your media", stepImportBody:"Add video, audio, and still images to a project.", stepArrange:"Shape the timeline", stepArrangeBody:"Arrange and split clips, then add text and effects.", stepExport:"Export your work", stepExportBody:"Review the preview and render an MP4.",
    featuresKicker:"TOOLS FOR YOUR CUT", featuresTitle:"The essentials,<br>right where you need them.", featuresIntro:"A straightforward workflow with the core tools to finish a cut.", featureTimeline:"Timeline editing", featureTimelineBody:"Place media on multiple tracks. Move, trim, split, and reorder clips in one workspace.", featureText:"Text and titles", featureTextBody:"Style text clips for titles and captions with position, color, size, and animation controls.", featureEffects:"Effects and transitions", featureEffectsBody:"Use implemented effects such as brightness, contrast, saturation, blur, and monochrome.", featureExport:"From preview to MP4", featureExportBody:"Review your edit and follow export progress while rendering an MP4.", featureFootnote:"The initial Open Beta release notes will describe exact feature scope and known limitations.",
    downloadKicker:"CHOOSE YOUR PLATFORM", downloadTitle:"Get ready for Editra.", downloadIntro:"Free beta for macOS 15.0+ on Apple Silicon arm64. Downloads stay disabled until release approval.", detectedLabel:"Your platform", platformGroup:"Select operating system", statusPreparing:"Awaiting approval", macRequirement:"macOS 15.0+ · Apple Silicon arm64", downloadUnavailable:"Awaiting approval", downloadNote:"The DMG is staged. Downloads remain disabled until source materials, notices, terms, and the public URL are approved. License materials are linked below.", integrityPending:"SHA-256", pending:"Not set", downloadReady:"Download DMG", readyNote:"Public release · verify the SHA-256 before extracting.", unsignedWarning:"This build has only an ad-hoc signature; it is not Developer ID signed or notarized. Verify its source and SHA-256.", notarizationWarning:"This build is not notarized. Verify its source and SHA-256.", statusReady:"Available", statusComingSoon:"Coming soon", windowsRequirement:"The Windows version is in development.", futureFormats:"Planned formats", comingSoon:"Coming Soon", windowsNote:"Release date and download URL are not set.", statusPlanned:"Planned", linuxRequirement:"Linux support is planned for the future.", planned:"Planned", linuxNote:"Release date and download URL are not set.", downloadFooter:"The DMG, third-party notices, corresponding source and relinking materials are planned for this official site. Downloads remain disabled until required license decisions and release approval are complete.", viewRelease:"View Editra website", cardReleaseNotes:"Release notes", cardInstallGuide:"Installation guide", cardLicenses:"Third-party licenses / source", cardTerms:"Terms", cardPrivacy:"Privacy", cardContact:"Contact",
    guideKicker:"INSTALL WITH CARE", guideTitle:"A clear path to<br>your first edit.", guideIntro:"The initial Open Beta targets macOS 15+ on Apple Silicon arm64. Public downloads are still being prepared.", requirementsTitle:"System requirements", installStep1:"Download and verify the DMG", installStep1Body:"Download the DMG directly from this official site and compare its SHA-256 with the published value. Do not open it if you cannot verify the source or checksum.", installStep2:"Extract and move to Applications", installStep2Body:"Open the DMG and drag EEDT.app to your Applications folder.", installStep3:"First launch and macOS warnings", installStep3Body:"Under the current release plan, the app will not have Developer ID signing or Apple notarization. macOS may show a warning. Only if you have verified the source and SHA-256 and independently trust the app, try opening it once, then use System Settings > Privacy & Security > the Security section > Open Anyway to allow this app individually. The wording can vary by macOS version.", securityTitle:"Stay safe", securityBody:"Do not open the app if Apple reports malware, if macOS says the app is damaged or modified, or if you cannot verify its source and checksum. We do not recommend disabling Gatekeeper, SIP, or system-wide protections. Follow Apple’s instructions for an individual app only.", appleGuide:"Apple’s official guide",
    releaseKicker:"WHAT'S IN THE BETA", releaseTitle:"Release notes", releaseIntro:"v0.6.0 · macOS Open Beta · Free", releaseStatus:"Preparing release", releaseEntryTitle:"The essentials of editing", releaseItem1:"Import video, audio, and still images; edit across multiple tracks", releaseItem2:"Move, trim, split, add text, effects, and transitions", releaseItem3:"Save and reopen projects; export MP4", releaseFootnote:"macOS 15.0+ on Apple Silicon arm64. Templates are excluded. Project media references use absolute paths.",
    faqKicker:"QUESTIONS, ANSWERED", faqTitle:"FAQ / Support", faqIntro:"Platform support, availability, and beta status.", supportPrompt:"Support contact: <a href=\"mailto:editra-support.empathy868@simplelogin.com\">editra-support.empathy868@simplelogin.com</a>. Terms and privacy information remain unapproved.", faq1Q:"Does Editra support macOS 12 or Intel Macs?", faq1A:"The initial Open Beta targets macOS 15.0+ on Apple Silicon (arm64). macOS 12 and Intel Macs are not included.", faq2Q:"Are Windows or Linux builds available?", faq2A:"Windows is in development and Linux is planned. There are no public downloads for either platform yet.", faq3Q:"Where are editing projects stored?", faq3A:"Projects can be saved locally. Media references use absolute paths, so moving a project to another Mac or OS may require relinking the media.", faq4Q:"What are the beta’s known limitations?", faq4A:"Templates are outside this beta. Projects store absolute media paths, so moving a project to another Mac may require relinking. Supported environment: Apple Silicon on macOS 15 or later.", footerTagline:"Create without limits.", footerStatus:"Open Beta · Release preparation", backTop:"Back to top ↑"
  }
};

function detectPlatform(platform = globalThis.navigator?.platform || '', userAgent = globalThis.navigator?.userAgent || '') {
  const value = `${platform} ${userAgent}`.toLowerCase();
  if (/iphone|ipad|android/.test(value)) return 'unknown';
  if (/mac|darwin/.test(value)) return 'macos';
  if (/win/.test(value)) return 'windows';
  if (/linux|x11|ubuntu|fedora/.test(value)) return 'linux';
  return 'unknown';
}
function httpsUrl(value) {
  try { const u = new URL(value); return u.protocol === 'https:' ? u : null; }
  catch { return null; }
}
function isPublicReleaseConfig(config) {
  if (!config || config.publicSiteDirect !== true) return false;
  const site = httpsUrl(config.siteUrl);
  const page = httpsUrl(config.releasePageUrl);
  const mac = config.macos || {};
  const file = httpsUrl(mac.downloadUrl);
  if (!site || !page || !file) return false;
  const sitePrefix = site.pathname.endsWith('/') ? site.pathname : `${site.pathname}/`;
  const sameSitePage = page.origin === site.origin && page.pathname.startsWith(sitePrefix);
  const sameSiteDownload = (file.origin === site.origin && file.pathname.startsWith(`${sitePrefix}downloads/`)) || (file.origin === 'https://github.com' && file.pathname.startsWith('/XxEMPxX/editra-official-site/releases/download/'));
  const ownerDecision = config.publicReleaseDecision === 'approved' || config.publicReleaseDecision === 'approved-with-known-risks';
  const technicalReady = config.technicalReleaseReady === true && config.dmgAssetVerified === true && config.sha256Verified === true && config.installationGuideReady === true;
  const signingStateKnown = typeof mac.developerIdSigned === 'boolean' && typeof mac.notarized === 'boolean' && (mac.developerIdSigned || !mac.notarized);
  const expectedDisclosure = mac.developerIdSigned && mac.notarized ? 'signed-and-notarized' : mac.developerIdSigned ? 'signed-not-notarized' : 'unsigned-and-not-notarized';
  const signingDisclosureMatches = mac.signingDisclosure === expectedDisclosure;
  const unsignedRiskAccepted = (mac.developerIdSigned && mac.notarized) || config.unsignedDistributionRiskAccepted === true;
  return Boolean(sameSitePage && sameSiteDownload && mac.enabled === true && mac.status === 'ready' && /^[a-f0-9]{64}$/i.test(mac.sha256 || '') && mac.version === '0.6.0' && mac.minimumMacOS === '15.0' && mac.architecture === 'arm64' && mac.package === 'DMG' && ownerDecision && technicalReady && signingStateKnown && signingDisclosureMatches && unsignedRiskAccepted);
}
function applyReleaseConfig(config, doc = globalThis.document) {
  const button = doc?.getElementById?.('mac-download');
  const note = doc?.getElementById?.('mac-download-note');
  const integrity = doc?.querySelector?.('.integrity-row span:last-child');
  const releaseLink = doc?.getElementById?.('release-page-link');
  const ok = isPublicReleaseConfig(config);
  if (button) {
    button.disabled = !ok;
    button.setAttribute('aria-disabled', String(!ok));
    if (ok) { button.dataset.url = config.macos.downloadUrl; button.dataset.release = config.releaseUrl; button.dataset.sha256 = config.macos.sha256; const label = button.querySelector('span'); if (label) label.textContent = copy[doc.documentElement.lang === 'en' ? 'en' : 'ja'].downloadReady; }
    else { delete button.dataset.url; delete button.dataset.release; delete button.dataset.sha256; }
  }
  if (note && ok) {
    const lang = doc.documentElement.lang === 'en' ? 'en' : 'ja';
    note.textContent = !config.macos.developerIdSigned ? copy[lang].unsignedWarning : !config.macos.notarized ? copy[lang].notarizationWarning : copy[lang].readyNote;
  }
  const status = doc?.querySelector?.('[data-card="macos"] .platform-status');
  if (status && ok) status.textContent = copy[doc.documentElement.lang === 'en' ? 'en' : 'ja'].statusReady;
  if (integrity) integrity.textContent = /^[a-f0-9]{64}$/i.test(config?.macos?.sha256 || '') ? config.macos.sha256 : copy[doc.documentElement.lang === 'en' ? 'en' : 'ja'].pending;
  if (releaseLink) {
    if (ok) { releaseLink.href = config.releasePageUrl; releaseLink.classList.remove('is-hidden'); }
    else { releaseLink.removeAttribute('href'); releaseLink.classList.add('is-hidden'); }
  }
  return ok;
}
function setLanguage(lang, doc = globalThis.document) {
  const selected = lang === 'en' ? 'en' : 'ja';
  if (!doc) return;
  doc.documentElement.lang = selected;
  doc.querySelectorAll('[data-i18n]').forEach(el => {
    const value = copy[selected][el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  doc.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const value = copy[selected][el.dataset.i18nAria];
    if (value !== undefined) el.setAttribute('aria-label', value);
  });
  const toggle = doc.getElementById('language-toggle');
  if (toggle) { toggle.textContent = selected === 'ja' ? 'EN' : '日本語'; toggle.setAttribute('aria-label', selected === 'ja' ? 'Switch to English' : '日本語に切り替え'); }
  const meta = doc.querySelector('meta[name="description"]');
  if (meta) meta.content = selected === 'ja' ? 'Editraは映像、音声、テキストをタイムラインで編集するデスクトップ動画エディターです。macOS Open Betaを準備中です。' : 'Editra is a desktop video editor for shaping footage, sound, and titles on a timeline. macOS Open Beta preparation is underway.';
  doc.title = selected === 'ja' ? 'Editra — Create without limits.' : 'Editra — Create without limits.';
}
function init(doc = globalThis.document, win = globalThis.window) {
  if (!doc || !win) return;
  const tabs = [...doc.querySelectorAll('.platform-tab')];
  const detected = detectPlatform();
  const detectedEl = doc.getElementById('detected-platform');
  if (detectedEl) detectedEl.textContent = detected === 'macos' ? 'macOS' : detected === 'windows' ? 'Windows' : detected === 'linux' ? 'Linux' : '—';
  function selectPlatform(value) {
    tabs.forEach(tab => {
      const active = tab.dataset.platform === value;
      tab.setAttribute('aria-pressed', String(active));
      doc.querySelector(`[data-card="${tab.dataset.platform}"]`)?.classList.toggle('is-selected', active);
    });
  }
  tabs.forEach(tab => tab.addEventListener('click', () => selectPlatform(tab.dataset.platform)));
  selectPlatform(detected === 'unknown' ? 'macos' : detected);
  const langToggle = doc.getElementById('language-toggle');
  langToggle?.addEventListener('click', () => setLanguage(doc.documentElement.lang === 'ja' ? 'en' : 'ja', doc));
  const menu = doc.querySelector('.menu-toggle');
  const nav = doc.getElementById('primary-nav');
  menu?.addEventListener('click', () => {
    const expanded = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(expanded));
    nav?.classList.toggle('is-open', expanded);
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('is-open'); menu?.setAttribute('aria-expanded','false'); }));
  doc.getElementById('mac-download')?.addEventListener('click', event => {
    const target = event.currentTarget;
    const targetUrl = target.dataset.url ? httpsUrl(target.dataset.url) : null;
    const allowedTarget = targetUrl && (targetUrl.origin === globalThis.location.origin || (targetUrl.origin === 'https://github.com' && targetUrl.pathname.startsWith('/XxEMPxX/editra-official-site/releases/download/')));
    if (target.disabled || !allowedTarget) {
      const region = doc.getElementById('toast-region');
      if (region) region.textContent = doc.documentElement.lang === 'en' ? 'The public download is not available yet.' : '公開ダウンロードはまだ利用できません。';
      return;
    }
    win.open(target.dataset.url, '_blank', 'noopener,noreferrer');
  });
  fetch('./releases.json', { cache: 'no-store' }).then(r => { if (!r.ok) throw new Error('release config unavailable'); return r.json(); }).then(config => {
    applyReleaseConfig(config, doc);
  }).catch(() => applyReleaseConfig(null, doc));
}
if (typeof window !== 'undefined' && typeof document !== 'undefined') init(document, window);
if (typeof window !== 'undefined') window.EditraSite = { detectPlatform, isPublicReleaseConfig, applyReleaseConfig, setLanguage, copy };
if (typeof module !== 'undefined' && module.exports) module.exports = { detectPlatform, isPublicReleaseConfig, applyReleaseConfig, setLanguage };
