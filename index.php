<!DOCTYPE html>
<html lang="ru">

<head>
  <link rel="alternate" hreflang="ru" href="index.html" />

  <meta charset="utf-8" />
  <title>ОФИЦИАЛЬНЫЙ САЙТ FXPRO. FX брокер №1 в мире</title>

  <meta http-equiv="Accept-CH" content="DPR, Viewport-Width, Width" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="preload" href="fonts/futura-font/FuturaPT-Book.woff2" crossorigin="" as="font" type="font/woff2" />
  <link rel="preload" href="fonts/futura-font/FuturaPT-Medium.woff2" crossorigin="" as="font" type="font/woff2" />
  <link rel="preload" href="fonts/futura-font/FuturaPT-Demi.woff2" crossorigin="" as="font" type="font/woff2" />

  <link rel="preload" href="fonts/fx-symbols-web-2-0/fonts/fx-symbols-web-2-0.woff2?81hr9e" crossorigin="" as="font" type="font/woff2" />
  <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png" />
  <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
  <link rel="manifest" href="manifest.json" />
  <link rel="mask-icon" href="safari-pinned-tab.svg" color="#5bbad5" />
  <link rel="apple-touch-icon" href="Logo-FxPro-60.png" />
  <link rel="apple-touch-icon" href="Logo-FxPro-76.png" sizes="76x76" />
  <link rel="apple-touch-icon" href="Logo-FxPro-120.png" sizes="120x120" />
  <link rel="apple-touch-icon" href="Logo-FxPro-152.png" sizes="152x152" />
  <meta name="msapplication-TileColor" content="#ffffff" />
  <meta name="theme-color" content="#0b8043" />
  <meta name="description" content="FxPro предлагает Контракты на разницу (CFD) на валютные пары и активы еще пяти классов. Начните торговать онлайн с лучшим в мире Форекс брокером.
" />






  <link rel="stylesheet" href="/assets/css/main.css" />
  <link rel="stylesheet" href="/assets/css/deposit.css" />
  <link rel="stylesheet" href="/assets/css/forex-acc.css" />
  <link rel="stylesheet" href="/assets/css/econom-calendar.css" />
  <link rel="stylesheet" href="/assets/css/indices.css" />
  <link rel="stylesheet" href="/assets/css/key.css" />
  <link rel="stylesheet" href="/assets/css/indices.css" />
  <link rel="stylesheet" href="/assets/css/shares.css" />
  <link rel="stylesheet" href="/assets/css/news-room.css" />
  <link rel="stylesheet" href="/assets/css/css.css" />

  <script>
    // @see https://github.com/filamentgroup/loadCSS/
    function loadCSS(href, before, media) {
      "use strict";
      var ss = window.document.createElement("link");
      var ref = before || window.document.getElementsByTagName("script")[0];
      var sheets = window.document.styleSheets;
      ss.rel = "stylesheet";
      ss.href = href;
      ss.media = "only x";
      ref.parentNode.insertBefore(ss, ref);

      function toggleMedia() {
        var defined;
        for (var i = 0; i < sheets.length; i++) {
          if (sheets[i].href && sheets[i].href.indexOf(href) > -1) {
            defined = true;
          }
        }
        if (defined) {
          ss.media = media || "all";
        } else {
          setTimeout(toggleMedia);
        }
      }
      toggleMedia();
      return ss;
    }
  </script>
  <script>
    loadCSS(
      "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
    );
    loadCSS(
      "https://direct-website.azureedge.net/fonts/fx-symbols-web-2-0/style.css"
    );
    loadCSS(
      "https://direct-website.azureedge.net/fonts/futura-font/futura.css"
    );
    loadCSS(
      "https://direct-website.azureedge.net/fonts/noto-sans-sc/noto-sans.css"
    );
    loadCSS(
      "https://direct-website.azureedge.net/fonts/fx-flags-web-2-0/fx-flags-svg-16.css"
    );
  </script>



  <link type="text/css" href="swiper%4010.2.0/swiper-bundle.min.css" />
  <meta property="og:title" content="ОФИЦИАЛЬНЫЙ САЙТ FXPRO. FX брокер №1 в мире" />
  <meta property="twitter:title" content="ОФИЦИАЛЬНЫЙ САЙТ FXPRO. FX брокер №1 в мире" />
  <meta property="og:description" content="FxPro предлагает Контракты на разницу (CFD) на валютные пары и активы еще пяти классов. Начните торговать онлайн с лучшим в мире Форекс брокером.
" />
  <meta property="twitter:card" content="FxPro предлагает Контракты на разницу (CFD) на валютные пары и активы еще пяти классов. Начните торговать онлайн с лучшим в мире Форекс брокером.
" />
  <meta property="twitter:description" content="FxPro предлагает Контракты на разницу (CFD) на валютные пары и активы еще пяти классов. Начните торговать онлайн с лучшим в мире Форекс брокером.
" />
  <meta property="twitter:image" content="Logo-FxPro-152.png" />
  <meta property="twitter:url" content="/" />
  <meta property="og:url" content="/" />
  <meta property="twitter:site" content="FxProGlobal" />
  <meta property="og:image" content="Logo-FxPro-152.png" />
  <meta property="og:type" content="Logo-FxPro-152.png" />
  <meta property="og:site_name" content="FxPro" />

</head>

<body data-cn="false" data-test="false" data-theme-set="light" data-script-version="28241830" data-path="/">

  <?php
  include "model.php";

  // Forex
  include "main.php";
  include "forex.php";
  include "futures.php";
  include "indices.php";
  include "shares.php";
  include "metals.php";
  include "energies.php";
  include "cryptocurrencies.php";
  // /Forex

  // Document
  include "legal-information.php";
  include "legal-documents.php";
  include "corporate-actions.php";
  include "key-information-documents.php";
  include "complaints-handling-procedure.php";
  include "privacy-policy.php";
  include "risk-disclosure.php";
  include "email-disclaimer.php";
  include "cookie-preference.php";
  include "tied-agents.php";
  include "terms-and-conditions.php";
  // /Document

  // Trading
  // include "model.php";
  include "deposit-methods.php";
  include "open-forex-account.php";
  include "news-room.php";
  include "forex-economic-calendar.php";
  include "calc.php";

  // /Trading

  ?>



  <script src="/assets/js/script.js"></script>
  <script src="/assets/js/gtm.js"></script>

  <script src="/assets/static-pages/scripts/lib/modernizr.js"></script>
  <script src="/assets/static-pages/scripts/lib/swiper.min.js"></script>
  <script src="/assets/static-pages/scripts/lib/lottie.min.js"></script>

  <script src="/assets/static-pages/scripts/config/local-storage-keys.config.js?v=28241830"></script>
  <script src="/assets/static-pages/scripts/config/cookie-names.config.js?v=28241830"></script>

  <script>
    const FSCMDisabledCountries = [
      "AT",
      "BE",
      "BG",
      "HR",
      "CY",
      "CZ",
      "DK",
      "EE",
      "FI",
      "FR",
      "DE",
      "GR",
      "HU",
      "IS",
      "IE",
      "IT",
      "LV",
      "LI",
      "LT",
      "LU",
      "MT",
      "NL",
      "NO",
      "PL",
      "PT",
      "RO",
      "SK",
      "SI",
      "ES",
      "SE",
      "CH",
      "GB",
    ];
    const EUCountries = [
      "AT",
      "BE",
      "BG",
      "HR",
      "CY",
      "CZ",
      "DK",
      "EE",
      "FI",
      "FR",
      "DE",
      "GR",
      "GR",
      "HU",
      "IE",
      "IT",
      "LV",
      "LT",
      "LU",
      "MT",
      "NL",
      "PL",
      "PT",
      "RO",
      "SK",
      "SI",
      "ES",
      "SE",
    ];
    const directAppStores = {
      AndroidNonEu: "https://play.google.com/store/apps/details?id=com.fxpro.direct.application",
      AndroidEu: "https://play.google.com/store/apps/details?id=com.fxpro.direct.app",
      IosNonEu: "https://apps.apple.com/us/app/fxpro-online-trading/id1388838533",
      IosEu: "https://apps.apple.com/us/app/fxpro-cfd-forex-trading/id1436961771",
      IosRu: "https://apps.apple.com/us/app/fxpro-news-and-analytics/id1560667652",
    };
    const OsType = {
      Ios: "Ios",
      Android: "Android",
      Mac: "Mac",
      Windows: "Windows",
    };
    const userCountry = "UA";
    const userJurisdiction = {
      name: "Ukraine",
      code: "UA",
      regulators: ["gm", "fscm"],
      defaultRegulator: "gm",
      partnersOnboardingAllowed: "auto",
    };
    const userExperiments = "419cdb41-a888-419f.0|5a9a9cd4-efcb-43dd.0";

    <
    !--Updatable-- >
    let abTest = {
      experiments: {
        "hero-banner": {
          parameters: null,
          flags: {
            mclarenBanner: "global-scb"
          },
        },
        "new-design": {
          parameters: {
            version: "old"
          },
          flags: null
        },
      },
    };
  </script>

  <script src="light-onboarding/light-onboarding.web-component-afbfa175d424ba9a670b.js" defer=""></script>

  <script src="/assets/static-pages/scripts/services/bundle.service.js?v=28241830"></script>
  <script src="/assets/static-pages/scripts/controllers/bundle.controller.js?v=28241830"></script>

  <script src="/assets/static-pages/scripts/controllers/app.controller.bundle.js?v=28241830"></script>

  <script src="/assets/static-pages/scripts/main.js?v=28241830"></script>

</body>

</html>