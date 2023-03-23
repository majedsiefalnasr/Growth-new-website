('use strict');

//    _____                      _
//   / ____|                    | |
//  | |     ___  _ __  ___  ___ | | ___
//  | |    / _ \| '_ \/ __|/ _ \| |/ _ \
//  | |___| (_) | | | \__ \ (_) | |  __/
//   \_____\___/|_| |_|___/\___/|_|\___|
//  | |        | | |
//  | |__   ___| | | ___    _ __ ___   ___  ___ ___  __ _  __ _  ___
//  | '_ \ / _ \ | |/ _ \  | '_ ` _ \ / _ \/ __/ __|/ _` |/ _` |/ _ \
//  | | | |  __/ | | (_) | | | | | | |  __/\__ \__ \ (_| | (_| |  __/
//  |_| |_|\___|_|_|\___/  |_| |_| |_|\___||___/___/\__,_|\__, |\___|
//                                                         __/ |
//                                                        |___/
// Console hello message
/**
 * initialize console hello
 */
export var console_hello = function () {
  const PROVIDER = 'Ultimate Solutions Egypt',
    PROVIDER_INFO =
      'International leader in Enterprise Resource Solutions and Software Development',
    PROVIDER_LINK = 'https://ultimate-eg.net',
    PROJECT = 'Growth - Smart shopping platform',
    PROJECT_INFO =
      'Without technical experience and with ease, you can sell anywhere and anytime with your online store and with your commercial identity',
    VERSION = 'beta';

  // Check if Chrome
  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    // Message
    const _log = [
      `\n%c  ${PROVIDER}  %c \n${PROVIDER_INFO} \n${PROVIDER_LINK}  \n\n${PROJECT} - ${VERSION} %c  \n${PROJECT_INFO}`,
      'color: #fff; border: 1px solid #22447B; background: #22447B; padding:5px;',
      'border: none; padding:5px 5px 0;',
      'border: none; padding:0 5px 5px;',
    ];

    // View message in console log
    setTimeout(console.log.bind(console, ..._log));
  } else if (window.console)
    setTimeout(
      console.log.bind(
        console,
        `\n  ${PROVIDER}  \n ${PROVIDER_INFO}  \n ${PROVIDER_LINK} \n ${PROJECT}  \n ${PROJECT_INFO}\n`
      )
    );
};
