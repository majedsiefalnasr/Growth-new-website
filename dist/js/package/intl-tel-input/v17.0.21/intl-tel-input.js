function createCommonjsModule(fn, basedir, module) {
  return module = {
    path: basedir,
    exports: {},
    require: function(path, base) {
      return commonjsRequire(path, base === void 0 || base === null ? module.path : base);
    }
  }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
  throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");
}
var intlTelInput = createCommonjsModule(function(module) {
  (function(factory) {
    if (module.exports)
      module.exports = factory();
    else
      window.intlTelInput = factory();
  })(function(undefined$1) {
    return function() {
      var allCountries = [["Afghanistan (\u202B\u0627\u0641\u063A\u0627\u0646\u0633\u062A\u0627\u0646\u202C\u200E)", "af", "93"], ["Albania (Shqip\xEBri)", "al", "355"], ["Algeria (\u202B\u0627\u0644\u062C\u0632\u0627\u0626\u0631\u202C\u200E)", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua and Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia (\u0540\u0561\u0575\u0561\u057D\u057F\u0561\u0576)", "am", "374"], ["Aruba", "aw", "297"], ["Ascension Island", "ac", "247"], ["Australia", "au", "61", 0], ["Austria (\xD6sterreich)", "at", "43"], ["Azerbaijan (Az\u0259rbaycan)", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain (\u202B\u0627\u0644\u0628\u062D\u0631\u064A\u0646\u202C\u200E)", "bh", "973"], ["Bangladesh (\u09AC\u09BE\u0982\u09B2\u09BE\u09A6\u09C7\u09B6)", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus (\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u044C)", "by", "375"], ["Belgium (Belgi\xEB)", "be", "32"], ["Belize", "bz", "501"], ["Benin (B\xE9nin)", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan (\u0F60\u0F56\u0FB2\u0F74\u0F42)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (\u0411\u043E\u0441\u043D\u0430 \u0438 \u0425\u0435\u0440\u0446\u0435\u0433\u043E\u0432\u0438\u043D\u0430)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria (\u0411\u044A\u043B\u0433\u0430\u0440\u0438\u044F)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (\u1780\u1798\u17D2\u1796\u17BB\u1787\u17B6)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "289", "306", "343", "365", "387", "403", "416", "418", "431", "437", "438", "450", "506", "514", "519", "548", "579", "581", "587", "604", "613", "639", "647", "672", "705", "709", "742", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic (R\xE9publique centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (\u4E2D\u56FD)", "cn", "86"], ["Christmas Island", "cx", "61", 2, ["89164"]], ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]], ["Colombia", "co", "57"], ["Comoros (\u202B\u062C\u0632\u0631 \u0627\u0644\u0642\u0645\u0631\u202C\u200E)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["C\xF4te d\u2019Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Cura\xE7ao", "cw", "599", 0], ["Cyprus (\u039A\u03CD\u03C0\u03C1\u03BF\u03C2)", "cy", "357"], ["Czech Republic (\u010Cesk\xE1 republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic (Rep\xFAblica Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (\u202B\u0645\u0635\u0631\u202C\u200E)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Eswatini", "sz", "268"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (F\xF8royar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane fran\xE7aise)", "gf", "594"], ["French Polynesia (Polyn\xE9sie fran\xE7aise)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (\u10E1\u10D0\u10E5\u10D0\u10E0\u10D7\u10D5\u10D4\u10DA\u10DD)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (\u0395\u03BB\u03BB\u03AC\u03B4\u03B1)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea (Guin\xE9e)", "gn", "224"], ["Guinea-Bissau (Guin\xE9 Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (\u9999\u6E2F)", "hk", "852"], ["Hungary (Magyarorsz\xE1g)", "hu", "36"], ["Iceland (\xCDsland)", "is", "354"], ["India (\u092D\u093E\u0930\u0924)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (\u202B\u0627\u06CC\u0631\u0627\u0646\u202C\u200E)", "ir", "98"], ["Iraq (\u202B\u0627\u0644\u0639\u0631\u0627\u0642\u202C\u200E)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel (\u202B\u05D9\u05E9\u05E8\u05D0\u05DC\u202C\u200E)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan (\u65E5\u672C)", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan (\u202B\u0627\u0644\u0623\u0631\u062F\u0646\u202C\u200E)", "jo", "962"], ["Kazakhstan (\u041A\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043D)", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (\u202B\u0627\u0644\u0643\u0648\u064A\u062A\u202C\u200E)", "kw", "965"], ["Kyrgyzstan (\u041A\u044B\u0440\u0433\u044B\u0437\u0441\u0442\u0430\u043D)", "kg", "996"], ["Laos (\u0EA5\u0EB2\u0EA7)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (\u202B\u0644\u0628\u0646\u0627\u0646\u202C\u200E)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (\u202B\u0644\u064A\u0628\u064A\u0627\u202C\u200E)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (\u6FB3\u9580)", "mo", "853"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (\u202B\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627\u202C\u200E)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico (M\xE9xico)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (\u041C\u043E\u043D\u0433\u043E\u043B)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco (\u202B\u0627\u0644\u0645\u063A\u0631\u0628\u202C\u200E)", "ma", "212", 0], ["Mozambique (Mo\xE7ambique)", "mz", "258"], ["Myanmar (Burma) (\u1019\u103C\u1014\u103A\u1019\u102C)", "mm", "95"], ["Namibia (Namibi\xEB)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (\u0928\u0947\u092A\u093E\u0932)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Cal\xE9donie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (\uC870\uC120 \uBBFC\uC8FC\uC8FC\uC758 \uC778\uBBFC \uACF5\uD654\uAD6D)", "kp", "850"], ["North Macedonia (\u0421\u0435\u0432\u0435\u0440\u043D\u0430 \u041C\u0430\u043A\u0435\u0434\u043E\u043D\u0438\u0458\u0430)", "mk", "389"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway (Norge)", "no", "47", 0], ["Oman (\u202B\u0639\u064F\u0645\u0627\u0646\u202C\u200E)", "om", "968"], ["Pakistan (\u202B\u067E\u0627\u06A9\u0633\u062A\u0627\u0646\u202C\u200E)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (\u202B\u0641\u0644\u0633\u0637\u064A\u0646\u202C\u200E)", "ps", "970"], ["Panama (Panam\xE1)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Per\xFA)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (\u202B\u0642\u0637\u0631\u202C\u200E)", "qa", "974"], ["R\xE9union (La R\xE9union)", "re", "262", 0], ["Romania (Rom\xE2nia)", "ro", "40"], ["Russia (\u0420\u043E\u0441\u0441\u0438\u044F)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barth\xE9lemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]], ["Saint Lucia", "lc", "1", 19, ["758"]], ["Saint Martin (Saint-Martin (partie fran\xE7aise))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["S\xE3o Tom\xE9 and Pr\xEDncipe (S\xE3o Tom\xE9 e Pr\xEDncipe)", "st", "239"], ["Saudi Arabia (\u202B\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629\u202C\u200E)", "sa", "966"], ["Senegal (S\xE9n\xE9gal)", "sn", "221"], ["Serbia (\u0421\u0440\u0431\u0438\u0458\u0430)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (\uB300\uD55C\uBBFC\uAD6D)", "kr", "82"], ["South Sudan (\u202B\u062C\u0646\u0648\u0628 \u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)", "ss", "211"], ["Spain (Espa\xF1a)", "es", "34"], ["Sri Lanka (\u0DC1\u0DCA\u200D\u0DBB\u0DD3 \u0DBD\u0D82\u0D9A\u0DCF\u0DC0)", "lk", "94"], ["Sudan (\u202B\u0627\u0644\u0633\u0648\u062F\u0627\u0646\u202C\u200E)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (\u202B\u0633\u0648\u0631\u064A\u0627\u202C\u200E)", "sy", "963"], ["Taiwan (\u53F0\u7063)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (\u0E44\u0E17\u0E22)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1", 22, ["868"]], ["Tunisia (\u202B\u062A\u0648\u0646\u0633\u202C\u200E)", "tn", "216"], ["Turkey (T\xFCrkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1", 24, ["340"]], ["Uganda", "ug", "256"], ["Ukraine (\u0423\u043A\u0440\u0430\u0457\u043D\u0430)", "ua", "380"], ["United Arab Emirates (\u202B\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A \u0627\u0644\u0639\u0631\u0628\u064A\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629\u202C\u200E)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (O\u02BBzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Citt\xE0 del Vaticano)", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam (Vi\u1EC7t Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (\u202B\u0627\u0644\u0635\u062D\u0631\u0627\u0621 \u0627\u0644\u063A\u0631\u0628\u064A\u0629\u202C\u200E)", "eh", "212", 1, ["5288", "5289"]], ["Yemen (\u202B\u0627\u0644\u064A\u0645\u0646\u202C\u200E)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["\xC5land Islands", "ax", "358", 1, ["18"]]];
      for (var i = 0; i < allCountries.length; i++) {
        var c = allCountries[i];
        allCountries[i] = {
          name: c[0],
          iso2: c[1],
          dialCode: c[2],
          priority: c[3] || 0,
          areaCodes: c[4] || null
        };
      }
      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }
      function _defineProperties(target, props) {
        for (var i2 = 0; i2 < props.length; i2++) {
          var descriptor = props[i2];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      function _createClass(Constructor, protoProps, staticProps) {
        if (protoProps)
          _defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          _defineProperties(Constructor, staticProps);
        return Constructor;
      }
      var intlTelInputGlobals = {
        getInstance: function getInstance(input) {
          var id2 = input.getAttribute("data-intl-tel-input-id");
          return window.intlTelInputGlobals.instances[id2];
        },
        instances: {},
        documentReady: function documentReady() {
          return document.readyState === "complete";
        }
      };
      if (typeof window === "object")
        window.intlTelInputGlobals = intlTelInputGlobals;
      var id = 0;
      var defaults = {
        allowDropdown: true,
        autoHideDialCode: true,
        autoPlaceholder: "polite",
        customContainer: "",
        customPlaceholder: null,
        dropdownContainer: null,
        excludeCountries: [],
        formatOnDisplay: true,
        geoIpLookup: null,
        hiddenInput: "",
        initialCountry: "",
        localizedCountries: null,
        nationalMode: true,
        onlyCountries: [],
        placeholderNumberType: "MOBILE",
        preferredCountries: ["us", "gb"],
        separateDialCode: false,
        utilsScript: ""
      };
      var regionlessNanpNumbers = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"];
      var forEachProp = function forEachProp2(obj, callback) {
        var keys = Object.keys(obj);
        for (var i2 = 0; i2 < keys.length; i2++) {
          callback(keys[i2], obj[keys[i2]]);
        }
      };
      var forEachInstance = function forEachInstance2(method) {
        forEachProp(window.intlTelInputGlobals.instances, function(key) {
          window.intlTelInputGlobals.instances[key][method]();
        });
      };
      var Iti = /* @__PURE__ */ function() {
        function Iti2(input, options) {
          var _this = this;
          _classCallCheck(this, Iti2);
          this.id = id++;
          this.telInput = input;
          this.activeItem = null;
          this.highlightedItem = null;
          var customOptions = options || {};
          this.options = {};
          forEachProp(defaults, function(key, value) {
            _this.options[key] = customOptions.hasOwnProperty(key) ? customOptions[key] : value;
          });
          this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
        }
        _createClass(Iti2, [{
          key: "_init",
          value: function _init() {
            var _this2 = this;
            if (this.options.nationalMode)
              this.options.autoHideDialCode = false;
            if (this.options.separateDialCode) {
              this.options.autoHideDialCode = this.options.nationalMode = false;
            }
            this.isMobile = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (this.isMobile) {
              document.body.classList.add("iti-mobile");
              if (!this.options.dropdownContainer)
                this.options.dropdownContainer = document.body;
            }
            if (typeof Promise !== "undefined") {
              var autoCountryPromise = new Promise(function(resolve, reject) {
                _this2.resolveAutoCountryPromise = resolve;
                _this2.rejectAutoCountryPromise = reject;
              });
              var utilsScriptPromise = new Promise(function(resolve, reject) {
                _this2.resolveUtilsScriptPromise = resolve;
                _this2.rejectUtilsScriptPromise = reject;
              });
              this.promise = Promise.all([autoCountryPromise, utilsScriptPromise]);
            } else {
              this.resolveAutoCountryPromise = this.rejectAutoCountryPromise = function() {
              };
              this.resolveUtilsScriptPromise = this.rejectUtilsScriptPromise = function() {
              };
            }
            this.selectedCountryData = {};
            this._processCountryData();
            this._generateMarkup();
            this._setInitialState();
            this._initListeners();
            this._initRequests();
          }
        }, {
          key: "_processCountryData",
          value: function _processCountryData() {
            this._processAllCountries();
            this._processCountryCodes();
            this._processPreferredCountries();
            if (this.options.localizedCountries)
              this._translateCountriesByLocale();
            if (this.options.onlyCountries.length || this.options.localizedCountries) {
              this.countries.sort(this._countryNameSort);
            }
          }
        }, {
          key: "_addCountryCode",
          value: function _addCountryCode(iso2, countryCode, priority) {
            if (countryCode.length > this.countryCodeMaxLen) {
              this.countryCodeMaxLen = countryCode.length;
            }
            if (!this.countryCodes.hasOwnProperty(countryCode)) {
              this.countryCodes[countryCode] = [];
            }
            for (var i2 = 0; i2 < this.countryCodes[countryCode].length; i2++) {
              if (this.countryCodes[countryCode][i2] === iso2)
                return;
            }
            var index = priority !== undefined$1 ? priority : this.countryCodes[countryCode].length;
            this.countryCodes[countryCode][index] = iso2;
          }
        }, {
          key: "_processAllCountries",
          value: function _processAllCountries() {
            if (this.options.onlyCountries.length) {
              var lowerCaseOnlyCountries = this.options.onlyCountries.map(function(country) {
                return country.toLowerCase();
              });
              this.countries = allCountries.filter(function(country) {
                return lowerCaseOnlyCountries.indexOf(country.iso2) > -1;
              });
            } else if (this.options.excludeCountries.length) {
              var lowerCaseExcludeCountries = this.options.excludeCountries.map(function(country) {
                return country.toLowerCase();
              });
              this.countries = allCountries.filter(function(country) {
                return lowerCaseExcludeCountries.indexOf(country.iso2) === -1;
              });
            } else {
              this.countries = allCountries;
            }
          }
        }, {
          key: "_translateCountriesByLocale",
          value: function _translateCountriesByLocale() {
            for (var i2 = 0; i2 < this.countries.length; i2++) {
              var iso = this.countries[i2].iso2.toLowerCase();
              if (this.options.localizedCountries.hasOwnProperty(iso)) {
                this.countries[i2].name = this.options.localizedCountries[iso];
              }
            }
          }
        }, {
          key: "_countryNameSort",
          value: function _countryNameSort(a, b) {
            return a.name.localeCompare(b.name);
          }
        }, {
          key: "_processCountryCodes",
          value: function _processCountryCodes() {
            this.countryCodeMaxLen = 0;
            this.dialCodes = {};
            this.countryCodes = {};
            for (var i2 = 0; i2 < this.countries.length; i2++) {
              var c2 = this.countries[i2];
              if (!this.dialCodes[c2.dialCode])
                this.dialCodes[c2.dialCode] = true;
              this._addCountryCode(c2.iso2, c2.dialCode, c2.priority);
            }
            for (var _i = 0; _i < this.countries.length; _i++) {
              var _c = this.countries[_i];
              if (_c.areaCodes) {
                var rootCountryCode = this.countryCodes[_c.dialCode][0];
                for (var j = 0; j < _c.areaCodes.length; j++) {
                  var areaCode = _c.areaCodes[j];
                  for (var k = 1; k < areaCode.length; k++) {
                    var partialDialCode = _c.dialCode + areaCode.substr(0, k);
                    this._addCountryCode(rootCountryCode, partialDialCode);
                    this._addCountryCode(_c.iso2, partialDialCode);
                  }
                  this._addCountryCode(_c.iso2, _c.dialCode + areaCode);
                }
              }
            }
          }
        }, {
          key: "_processPreferredCountries",
          value: function _processPreferredCountries() {
            this.preferredCountries = [];
            for (var i2 = 0; i2 < this.options.preferredCountries.length; i2++) {
              var countryCode = this.options.preferredCountries[i2].toLowerCase();
              var countryData = this._getCountryData(countryCode, false, true);
              if (countryData)
                this.preferredCountries.push(countryData);
            }
          }
        }, {
          key: "_createEl",
          value: function _createEl(name, attrs, container) {
            var el = document.createElement(name);
            if (attrs)
              forEachProp(attrs, function(key, value) {
                return el.setAttribute(key, value);
              });
            if (container)
              container.appendChild(el);
            return el;
          }
        }, {
          key: "_generateMarkup",
          value: function _generateMarkup() {
            if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) {
              this.telInput.setAttribute("autocomplete", "off");
            }
            var parentClass = "iti";
            if (this.options.allowDropdown)
              parentClass += " iti--allow-dropdown";
            if (this.options.separateDialCode)
              parentClass += " iti--separate-dial-code";
            if (this.options.customContainer) {
              parentClass += " ";
              parentClass += this.options.customContainer;
            }
            var wrapper = this._createEl("div", {
              class: parentClass
            });
            this.telInput.parentNode.insertBefore(wrapper, this.telInput);
            this.flagsContainer = this._createEl("div", {
              class: "iti__flag-container"
            }, wrapper);
            wrapper.appendChild(this.telInput);
            this.selectedFlag = this._createEl("div", {
              class: "iti__selected-flag",
              role: "combobox",
              "aria-controls": "iti-".concat(this.id, "__country-listbox"),
              "aria-owns": "iti-".concat(this.id, "__country-listbox"),
              "aria-expanded": "false"
            }, this.flagsContainer);
            this.selectedFlagInner = this._createEl("div", {
              class: "iti__flag"
            }, this.selectedFlag);
            if (this.options.separateDialCode) {
              this.selectedDialCode = this._createEl("div", {
                class: "iti__selected-dial-code"
              }, this.selectedFlag);
            }
            if (this.options.allowDropdown) {
              this.selectedFlag.setAttribute("tabindex", "0");
              this.dropdownArrow = this._createEl("div", {
                class: "iti__arrow"
              }, this.selectedFlag);
              this.countryList = this._createEl("ul", {
                class: "iti__country-list iti__hide",
                id: "iti-".concat(this.id, "__country-listbox"),
                role: "listbox",
                "aria-label": "List of countries"
              });
              if (this.preferredCountries.length) {
                this._appendListItems(this.preferredCountries, "iti__preferred", true);
                this._createEl("li", {
                  class: "iti__divider",
                  role: "separator",
                  "aria-disabled": "true"
                }, this.countryList);
              }
              this._appendListItems(this.countries, "iti__standard");
              if (this.options.dropdownContainer) {
                this.dropdown = this._createEl("div", {
                  class: "iti iti--container"
                });
                this.dropdown.appendChild(this.countryList);
              } else {
                this.flagsContainer.appendChild(this.countryList);
              }
            }
            if (this.options.hiddenInput) {
              var hiddenInputName = this.options.hiddenInput;
              var name = this.telInput.getAttribute("name");
              if (name) {
                var i2 = name.lastIndexOf("[");
                if (i2 !== -1)
                  hiddenInputName = "".concat(name.substr(0, i2), "[").concat(hiddenInputName, "]");
              }
              this.hiddenInput = this._createEl("input", {
                type: "hidden",
                name: hiddenInputName
              });
              wrapper.appendChild(this.hiddenInput);
            }
          }
        }, {
          key: "_appendListItems",
          value: function _appendListItems(countries, className, preferred) {
            var tmp = "";
            for (var i2 = 0; i2 < countries.length; i2++) {
              var c2 = countries[i2];
              var idSuffix = preferred ? "-preferred" : "";
              tmp += "<li class='iti__country ".concat(className, "' tabIndex='-1' id='iti-").concat(this.id, "__item-").concat(c2.iso2).concat(idSuffix, "' role='option' data-dial-code='").concat(c2.dialCode, "' data-country-code='").concat(c2.iso2, "' aria-selected='false'>");
              tmp += "<div class='iti__flag-box'><div class='iti__flag iti__".concat(c2.iso2, "'></div></div>");
              tmp += "<span class='iti__country-name'>".concat(c2.name, "</span>");
              tmp += "<span class='iti__dial-code'>+".concat(c2.dialCode, "</span>");
              tmp += "</li>";
            }
            this.countryList.insertAdjacentHTML("beforeend", tmp);
          }
        }, {
          key: "_setInitialState",
          value: function _setInitialState() {
            var attributeValue = this.telInput.getAttribute("value");
            var inputValue = this.telInput.value;
            var useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
            var val = useAttribute ? attributeValue : inputValue;
            var dialCode = this._getDialCode(val);
            var isRegionlessNanp = this._isRegionlessNanp(val);
            var _this$options = this.options, initialCountry = _this$options.initialCountry, nationalMode = _this$options.nationalMode, autoHideDialCode = _this$options.autoHideDialCode, separateDialCode = _this$options.separateDialCode;
            if (dialCode && !isRegionlessNanp) {
              this._updateFlagFromNumber(val);
            } else if (initialCountry !== "auto") {
              if (initialCountry) {
                this._setFlag(initialCountry.toLowerCase());
              } else {
                if (dialCode && isRegionlessNanp) {
                  this._setFlag("us");
                } else {
                  this.defaultCountry = this.preferredCountries.length ? this.preferredCountries[0].iso2 : this.countries[0].iso2;
                  if (!val) {
                    this._setFlag(this.defaultCountry);
                  }
                }
              }
              if (!val && !nationalMode && !autoHideDialCode && !separateDialCode) {
                this.telInput.value = "+".concat(this.selectedCountryData.dialCode);
              }
            }
            if (val)
              this._updateValFromNumber(val);
          }
        }, {
          key: "_initListeners",
          value: function _initListeners() {
            this._initKeyListeners();
            if (this.options.autoHideDialCode)
              this._initBlurListeners();
            if (this.options.allowDropdown)
              this._initDropdownListeners();
            if (this.hiddenInput)
              this._initHiddenInputListener();
          }
        }, {
          key: "_initHiddenInputListener",
          value: function _initHiddenInputListener() {
            var _this3 = this;
            this._handleHiddenInputSubmit = function() {
              _this3.hiddenInput.value = _this3.getNumber();
            };
            if (this.telInput.form)
              this.telInput.form.addEventListener("submit", this._handleHiddenInputSubmit);
          }
        }, {
          key: "_getClosestLabel",
          value: function _getClosestLabel() {
            var el = this.telInput;
            while (el && el.tagName !== "LABEL") {
              el = el.parentNode;
            }
            return el;
          }
        }, {
          key: "_initDropdownListeners",
          value: function _initDropdownListeners() {
            var _this4 = this;
            this._handleLabelClick = function(e) {
              if (_this4.countryList.classList.contains("iti__hide"))
                _this4.telInput.focus();
              else
                e.preventDefault();
            };
            var label = this._getClosestLabel();
            if (label)
              label.addEventListener("click", this._handleLabelClick);
            this._handleClickSelectedFlag = function() {
              if (_this4.countryList.classList.contains("iti__hide") && !_this4.telInput.disabled && !_this4.telInput.readOnly) {
                _this4._showDropdown();
              }
            };
            this.selectedFlag.addEventListener("click", this._handleClickSelectedFlag);
            this._handleFlagsContainerKeydown = function(e) {
              var isDropdownHidden = _this4.countryList.classList.contains("iti__hide");
              if (isDropdownHidden && ["ArrowUp", "Up", "ArrowDown", "Down", " ", "Enter"].indexOf(e.key) !== -1) {
                e.preventDefault();
                e.stopPropagation();
                _this4._showDropdown();
              }
              if (e.key === "Tab")
                _this4._closeDropdown();
            };
            this.flagsContainer.addEventListener("keydown", this._handleFlagsContainerKeydown);
          }
        }, {
          key: "_initRequests",
          value: function _initRequests() {
            var _this5 = this;
            if (this.options.utilsScript && !window.intlTelInputUtils) {
              if (window.intlTelInputGlobals.documentReady()) {
                window.intlTelInputGlobals.loadUtils(this.options.utilsScript);
              } else {
                window.addEventListener("load", function() {
                  window.intlTelInputGlobals.loadUtils(_this5.options.utilsScript);
                });
              }
            } else
              this.resolveUtilsScriptPromise();
            if (this.options.initialCountry === "auto")
              this._loadAutoCountry();
            else
              this.resolveAutoCountryPromise();
          }
        }, {
          key: "_loadAutoCountry",
          value: function _loadAutoCountry() {
            if (window.intlTelInputGlobals.autoCountry) {
              this.handleAutoCountry();
            } else if (!window.intlTelInputGlobals.startedLoadingAutoCountry) {
              window.intlTelInputGlobals.startedLoadingAutoCountry = true;
              if (typeof this.options.geoIpLookup === "function") {
                this.options.geoIpLookup(function(countryCode) {
                  window.intlTelInputGlobals.autoCountry = countryCode.toLowerCase();
                  setTimeout(function() {
                    return forEachInstance("handleAutoCountry");
                  });
                }, function() {
                  return forEachInstance("rejectAutoCountryPromise");
                });
              }
            }
          }
        }, {
          key: "_initKeyListeners",
          value: function _initKeyListeners() {
            var _this6 = this;
            this._handleKeyupEvent = function() {
              if (_this6._updateFlagFromNumber(_this6.telInput.value)) {
                _this6._triggerCountryChange();
              }
            };
            this.telInput.addEventListener("keyup", this._handleKeyupEvent);
            this._handleClipboardEvent = function() {
              setTimeout(_this6._handleKeyupEvent);
            };
            this.telInput.addEventListener("cut", this._handleClipboardEvent);
            this.telInput.addEventListener("paste", this._handleClipboardEvent);
          }
        }, {
          key: "_cap",
          value: function _cap(number) {
            var max = this.telInput.getAttribute("maxlength");
            return max && number.length > max ? number.substr(0, max) : number;
          }
        }, {
          key: "_initBlurListeners",
          value: function _initBlurListeners() {
            var _this7 = this;
            this._handleSubmitOrBlurEvent = function() {
              _this7._removeEmptyDialCode();
            };
            if (this.telInput.form)
              this.telInput.form.addEventListener("submit", this._handleSubmitOrBlurEvent);
            this.telInput.addEventListener("blur", this._handleSubmitOrBlurEvent);
          }
        }, {
          key: "_removeEmptyDialCode",
          value: function _removeEmptyDialCode() {
            if (this.telInput.value.charAt(0) === "+") {
              var numeric = this._getNumeric(this.telInput.value);
              if (!numeric || this.selectedCountryData.dialCode === numeric) {
                this.telInput.value = "";
              }
            }
          }
        }, {
          key: "_getNumeric",
          value: function _getNumeric(s) {
            return s.replace(/\D/g, "");
          }
        }, {
          key: "_trigger",
          value: function _trigger(name) {
            var e = document.createEvent("Event");
            e.initEvent(name, true, true);
            this.telInput.dispatchEvent(e);
          }
        }, {
          key: "_showDropdown",
          value: function _showDropdown() {
            this.countryList.classList.remove("iti__hide");
            this.selectedFlag.setAttribute("aria-expanded", "true");
            this._setDropdownPosition();
            if (this.activeItem) {
              this._highlightListItem(this.activeItem, false);
              this._scrollTo(this.activeItem, true);
            }
            this._bindDropdownListeners();
            this.dropdownArrow.classList.add("iti__arrow--up");
            this._trigger("open:countrydropdown");
          }
        }, {
          key: "_toggleClass",
          value: function _toggleClass(el, className, shouldHaveClass) {
            if (shouldHaveClass && !el.classList.contains(className))
              el.classList.add(className);
            else if (!shouldHaveClass && el.classList.contains(className))
              el.classList.remove(className);
          }
        }, {
          key: "_setDropdownPosition",
          value: function _setDropdownPosition() {
            var _this8 = this;
            if (this.options.dropdownContainer) {
              this.options.dropdownContainer.appendChild(this.dropdown);
            }
            if (!this.isMobile) {
              var pos = this.telInput.getBoundingClientRect();
              var windowTop = window.pageYOffset || document.documentElement.scrollTop;
              var inputTop = pos.top + windowTop;
              var dropdownHeight = this.countryList.offsetHeight;
              var dropdownFitsBelow = inputTop + this.telInput.offsetHeight + dropdownHeight < windowTop + window.innerHeight;
              var dropdownFitsAbove = inputTop - dropdownHeight > windowTop;
              this._toggleClass(this.countryList, "iti__country-list--dropup", !dropdownFitsBelow && dropdownFitsAbove);
              if (this.options.dropdownContainer) {
                var extraTop = !dropdownFitsBelow && dropdownFitsAbove ? 0 : this.telInput.offsetHeight;
                this.dropdown.style.top = "".concat(inputTop + extraTop, "px");
                this.dropdown.style.left = "".concat(pos.left + document.body.scrollLeft, "px");
                this._handleWindowScroll = function() {
                  return _this8._closeDropdown();
                };
                window.addEventListener("scroll", this._handleWindowScroll);
              }
            }
          }
        }, {
          key: "_getClosestListItem",
          value: function _getClosestListItem(target) {
            var el = target;
            while (el && el !== this.countryList && !el.classList.contains("iti__country")) {
              el = el.parentNode;
            }
            return el === this.countryList ? null : el;
          }
        }, {
          key: "_bindDropdownListeners",
          value: function _bindDropdownListeners() {
            var _this9 = this;
            this._handleMouseoverCountryList = function(e) {
              var listItem = _this9._getClosestListItem(e.target);
              if (listItem)
                _this9._highlightListItem(listItem, false);
            };
            this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
            this._handleClickCountryList = function(e) {
              var listItem = _this9._getClosestListItem(e.target);
              if (listItem)
                _this9._selectListItem(listItem);
            };
            this.countryList.addEventListener("click", this._handleClickCountryList);
            var isOpening = true;
            this._handleClickOffToClose = function() {
              if (!isOpening)
                _this9._closeDropdown();
              isOpening = false;
            };
            document.documentElement.addEventListener("click", this._handleClickOffToClose);
            var query = "";
            var queryTimer = null;
            this._handleKeydownOnDropdown = function(e) {
              e.preventDefault();
              if (e.key === "ArrowUp" || e.key === "Up" || e.key === "ArrowDown" || e.key === "Down")
                _this9._handleUpDownKey(e.key);
              else if (e.key === "Enter")
                _this9._handleEnterKey();
              else if (e.key === "Escape")
                _this9._closeDropdown();
              else if (/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
                if (queryTimer)
                  clearTimeout(queryTimer);
                query += e.key.toLowerCase();
                _this9._searchForCountry(query);
                queryTimer = setTimeout(function() {
                  query = "";
                }, 1e3);
              }
            };
            document.addEventListener("keydown", this._handleKeydownOnDropdown);
          }
        }, {
          key: "_handleUpDownKey",
          value: function _handleUpDownKey(key) {
            var next = key === "ArrowUp" || key === "Up" ? this.highlightedItem.previousElementSibling : this.highlightedItem.nextElementSibling;
            if (next) {
              if (next.classList.contains("iti__divider")) {
                next = key === "ArrowUp" || key === "Up" ? next.previousElementSibling : next.nextElementSibling;
              }
              this._highlightListItem(next, true);
            }
          }
        }, {
          key: "_handleEnterKey",
          value: function _handleEnterKey() {
            if (this.highlightedItem)
              this._selectListItem(this.highlightedItem);
          }
        }, {
          key: "_searchForCountry",
          value: function _searchForCountry(query) {
            for (var i2 = 0; i2 < this.countries.length; i2++) {
              if (this._startsWith(this.countries[i2].name, query)) {
                var listItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(this.countries[i2].iso2));
                this._highlightListItem(listItem, false);
                this._scrollTo(listItem, true);
                break;
              }
            }
          }
        }, {
          key: "_startsWith",
          value: function _startsWith(a, b) {
            return a.substr(0, b.length).toLowerCase() === b;
          }
        }, {
          key: "_updateValFromNumber",
          value: function _updateValFromNumber(originalNumber) {
            var number = originalNumber;
            if (this.options.formatOnDisplay && window.intlTelInputUtils && this.selectedCountryData) {
              var useNational = !this.options.separateDialCode && (this.options.nationalMode || number.charAt(0) !== "+");
              var _intlTelInputUtils$nu = intlTelInputUtils.numberFormat, NATIONAL = _intlTelInputUtils$nu.NATIONAL, INTERNATIONAL = _intlTelInputUtils$nu.INTERNATIONAL;
              var format = useNational ? NATIONAL : INTERNATIONAL;
              number = intlTelInputUtils.formatNumber(number, this.selectedCountryData.iso2, format);
            }
            number = this._beforeSetNumber(number);
            this.telInput.value = number;
          }
        }, {
          key: "_updateFlagFromNumber",
          value: function _updateFlagFromNumber(originalNumber) {
            var number = originalNumber;
            var selectedDialCode = this.selectedCountryData.dialCode;
            var isNanp = selectedDialCode === "1";
            if (number && this.options.nationalMode && isNanp && number.charAt(0) !== "+") {
              if (number.charAt(0) !== "1")
                number = "1".concat(number);
              number = "+".concat(number);
            }
            if (this.options.separateDialCode && selectedDialCode && number.charAt(0) !== "+") {
              number = "+".concat(selectedDialCode).concat(number);
            }
            var dialCode = this._getDialCode(number, true);
            var numeric = this._getNumeric(number);
            var countryCode = null;
            if (dialCode) {
              var countryCodes = this.countryCodes[this._getNumeric(dialCode)];
              var alreadySelected = countryCodes.indexOf(this.selectedCountryData.iso2) !== -1 && numeric.length <= dialCode.length - 1;
              var isRegionlessNanpNumber = selectedDialCode === "1" && this._isRegionlessNanp(numeric);
              if (!isRegionlessNanpNumber && !alreadySelected) {
                for (var j = 0; j < countryCodes.length; j++) {
                  if (countryCodes[j]) {
                    countryCode = countryCodes[j];
                    break;
                  }
                }
              }
            } else if (number.charAt(0) === "+" && numeric.length) {
              countryCode = "";
            } else if (!number || number === "+") {
              countryCode = this.defaultCountry;
            }
            if (countryCode !== null) {
              return this._setFlag(countryCode);
            }
            return false;
          }
        }, {
          key: "_isRegionlessNanp",
          value: function _isRegionlessNanp(number) {
            var numeric = this._getNumeric(number);
            if (numeric.charAt(0) === "1") {
              var areaCode = numeric.substr(1, 3);
              return regionlessNanpNumbers.indexOf(areaCode) !== -1;
            }
            return false;
          }
        }, {
          key: "_highlightListItem",
          value: function _highlightListItem(listItem, shouldFocus) {
            var prevItem = this.highlightedItem;
            if (prevItem)
              prevItem.classList.remove("iti__highlight");
            this.highlightedItem = listItem;
            this.highlightedItem.classList.add("iti__highlight");
            if (shouldFocus)
              this.highlightedItem.focus();
          }
        }, {
          key: "_getCountryData",
          value: function _getCountryData(countryCode, ignoreOnlyCountriesOption, allowFail) {
            var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
            for (var i2 = 0; i2 < countryList.length; i2++) {
              if (countryList[i2].iso2 === countryCode) {
                return countryList[i2];
              }
            }
            if (allowFail) {
              return null;
            }
            throw new Error("No country data for '".concat(countryCode, "'"));
          }
        }, {
          key: "_setFlag",
          value: function _setFlag(countryCode) {
            var prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
            this.selectedCountryData = countryCode ? this._getCountryData(countryCode, false, false) : {};
            if (this.selectedCountryData.iso2) {
              this.defaultCountry = this.selectedCountryData.iso2;
            }
            this.selectedFlagInner.setAttribute("class", "iti__flag iti__".concat(countryCode));
            var title = countryCode ? "".concat(this.selectedCountryData.name, ": +").concat(this.selectedCountryData.dialCode) : "Unknown";
            this.selectedFlag.setAttribute("title", title);
            if (this.options.separateDialCode) {
              var dialCode = this.selectedCountryData.dialCode ? "+".concat(this.selectedCountryData.dialCode) : "";
              this.selectedDialCode.innerHTML = dialCode;
              var selectedFlagWidth = this.selectedFlag.offsetWidth || this._getHiddenSelectedFlagWidth();
              this.telInput.style.paddingLeft = "".concat(selectedFlagWidth + 6, "px");
            }
            this._updatePlaceholder();
            if (this.options.allowDropdown) {
              var prevItem = this.activeItem;
              if (prevItem) {
                prevItem.classList.remove("iti__active");
                prevItem.setAttribute("aria-selected", "false");
              }
              if (countryCode) {
                var nextItem = this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode, "-preferred")) || this.countryList.querySelector("#iti-".concat(this.id, "__item-").concat(countryCode));
                nextItem.setAttribute("aria-selected", "true");
                nextItem.classList.add("iti__active");
                this.activeItem = nextItem;
                this.selectedFlag.setAttribute("aria-activedescendant", nextItem.getAttribute("id"));
              }
            }
            return prevCountry.iso2 !== countryCode;
          }
        }, {
          key: "_getHiddenSelectedFlagWidth",
          value: function _getHiddenSelectedFlagWidth() {
            var containerClone = this.telInput.parentNode.cloneNode();
            containerClone.style.visibility = "hidden";
            document.body.appendChild(containerClone);
            var flagsContainerClone = this.flagsContainer.cloneNode();
            containerClone.appendChild(flagsContainerClone);
            var selectedFlagClone = this.selectedFlag.cloneNode(true);
            flagsContainerClone.appendChild(selectedFlagClone);
            var width = selectedFlagClone.offsetWidth;
            containerClone.parentNode.removeChild(containerClone);
            return width;
          }
        }, {
          key: "_updatePlaceholder",
          value: function _updatePlaceholder() {
            var shouldSetPlaceholder = this.options.autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && this.options.autoPlaceholder === "polite";
            if (window.intlTelInputUtils && shouldSetPlaceholder) {
              var numberType = intlTelInputUtils.numberType[this.options.placeholderNumberType];
              var placeholder = this.selectedCountryData.iso2 ? intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2, this.options.nationalMode, numberType) : "";
              placeholder = this._beforeSetNumber(placeholder);
              if (typeof this.options.customPlaceholder === "function") {
                placeholder = this.options.customPlaceholder(placeholder, this.selectedCountryData);
              }
              this.telInput.setAttribute("placeholder", placeholder);
            }
          }
        }, {
          key: "_selectListItem",
          value: function _selectListItem(listItem) {
            var flagChanged = this._setFlag(listItem.getAttribute("data-country-code"));
            this._closeDropdown();
            this._updateDialCode(listItem.getAttribute("data-dial-code"), true);
            this.telInput.focus();
            var len = this.telInput.value.length;
            this.telInput.setSelectionRange(len, len);
            if (flagChanged) {
              this._triggerCountryChange();
            }
          }
        }, {
          key: "_closeDropdown",
          value: function _closeDropdown() {
            this.countryList.classList.add("iti__hide");
            this.selectedFlag.setAttribute("aria-expanded", "false");
            this.dropdownArrow.classList.remove("iti__arrow--up");
            document.removeEventListener("keydown", this._handleKeydownOnDropdown);
            document.documentElement.removeEventListener("click", this._handleClickOffToClose);
            this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
            this.countryList.removeEventListener("click", this._handleClickCountryList);
            if (this.options.dropdownContainer) {
              if (!this.isMobile)
                window.removeEventListener("scroll", this._handleWindowScroll);
              if (this.dropdown.parentNode)
                this.dropdown.parentNode.removeChild(this.dropdown);
            }
            this._trigger("close:countrydropdown");
          }
        }, {
          key: "_scrollTo",
          value: function _scrollTo(element, middle) {
            var container = this.countryList;
            var windowTop = window.pageYOffset || document.documentElement.scrollTop;
            var containerHeight = container.offsetHeight;
            var containerTop = container.getBoundingClientRect().top + windowTop;
            var containerBottom = containerTop + containerHeight;
            var elementHeight = element.offsetHeight;
            var elementTop = element.getBoundingClientRect().top + windowTop;
            var elementBottom = elementTop + elementHeight;
            var newScrollTop = elementTop - containerTop + container.scrollTop;
            var middleOffset = containerHeight / 2 - elementHeight / 2;
            if (elementTop < containerTop) {
              if (middle)
                newScrollTop -= middleOffset;
              container.scrollTop = newScrollTop;
            } else if (elementBottom > containerBottom) {
              if (middle)
                newScrollTop += middleOffset;
              var heightDifference = containerHeight - elementHeight;
              container.scrollTop = newScrollTop - heightDifference;
            }
          }
        }, {
          key: "_updateDialCode",
          value: function _updateDialCode(newDialCodeBare, hasSelectedListItem) {
            var inputVal = this.telInput.value;
            var newDialCode = "+".concat(newDialCodeBare);
            var newNumber;
            if (inputVal.charAt(0) === "+") {
              var prevDialCode = this._getDialCode(inputVal);
              if (prevDialCode) {
                newNumber = inputVal.replace(prevDialCode, newDialCode);
              } else {
                newNumber = newDialCode;
              }
            } else if (this.options.nationalMode || this.options.separateDialCode) {
              return;
            } else {
              if (inputVal) {
                newNumber = newDialCode + inputVal;
              } else if (hasSelectedListItem || !this.options.autoHideDialCode) {
                newNumber = newDialCode;
              } else {
                return;
              }
            }
            this.telInput.value = newNumber;
          }
        }, {
          key: "_getDialCode",
          value: function _getDialCode(number, includeAreaCode) {
            var dialCode = "";
            if (number.charAt(0) === "+") {
              var numericChars = "";
              for (var i2 = 0; i2 < number.length; i2++) {
                var c2 = number.charAt(i2);
                if (!isNaN(parseInt(c2, 10))) {
                  numericChars += c2;
                  if (includeAreaCode) {
                    if (this.countryCodes[numericChars]) {
                      dialCode = number.substr(0, i2 + 1);
                    }
                  } else {
                    if (this.dialCodes[numericChars]) {
                      dialCode = number.substr(0, i2 + 1);
                      break;
                    }
                  }
                  if (numericChars.length === this.countryCodeMaxLen) {
                    break;
                  }
                }
              }
            }
            return dialCode;
          }
        }, {
          key: "_getFullNumber",
          value: function _getFullNumber() {
            var val = this.telInput.value.trim();
            var dialCode = this.selectedCountryData.dialCode;
            var prefix;
            var numericVal = this._getNumeric(val);
            if (this.options.separateDialCode && val.charAt(0) !== "+" && dialCode && numericVal) {
              prefix = "+".concat(dialCode);
            } else {
              prefix = "";
            }
            return prefix + val;
          }
        }, {
          key: "_beforeSetNumber",
          value: function _beforeSetNumber(originalNumber) {
            var number = originalNumber;
            if (this.options.separateDialCode) {
              var dialCode = this._getDialCode(number);
              if (dialCode) {
                dialCode = "+".concat(this.selectedCountryData.dialCode);
                var start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                number = number.substr(start);
              }
            }
            return this._cap(number);
          }
        }, {
          key: "_triggerCountryChange",
          value: function _triggerCountryChange() {
            this._trigger("countrychange");
          }
        }, {
          key: "handleAutoCountry",
          value: function handleAutoCountry() {
            if (this.options.initialCountry === "auto") {
              this.defaultCountry = window.intlTelInputGlobals.autoCountry;
              if (!this.telInput.value) {
                this.setCountry(this.defaultCountry);
              }
              this.resolveAutoCountryPromise();
            }
          }
        }, {
          key: "handleUtils",
          value: function handleUtils() {
            if (window.intlTelInputUtils) {
              if (this.telInput.value) {
                this._updateValFromNumber(this.telInput.value);
              }
              this._updatePlaceholder();
            }
            this.resolveUtilsScriptPromise();
          }
        }, {
          key: "destroy",
          value: function destroy() {
            var form = this.telInput.form;
            if (this.options.allowDropdown) {
              this._closeDropdown();
              this.selectedFlag.removeEventListener("click", this._handleClickSelectedFlag);
              this.flagsContainer.removeEventListener("keydown", this._handleFlagsContainerKeydown);
              var label = this._getClosestLabel();
              if (label)
                label.removeEventListener("click", this._handleLabelClick);
            }
            if (this.hiddenInput && form)
              form.removeEventListener("submit", this._handleHiddenInputSubmit);
            if (this.options.autoHideDialCode) {
              if (form)
                form.removeEventListener("submit", this._handleSubmitOrBlurEvent);
              this.telInput.removeEventListener("blur", this._handleSubmitOrBlurEvent);
            }
            this.telInput.removeEventListener("keyup", this._handleKeyupEvent);
            this.telInput.removeEventListener("cut", this._handleClipboardEvent);
            this.telInput.removeEventListener("paste", this._handleClipboardEvent);
            this.telInput.removeAttribute("data-intl-tel-input-id");
            var wrapper = this.telInput.parentNode;
            wrapper.parentNode.insertBefore(this.telInput, wrapper);
            wrapper.parentNode.removeChild(wrapper);
            delete window.intlTelInputGlobals.instances[this.id];
          }
        }, {
          key: "getExtension",
          value: function getExtension() {
            if (window.intlTelInputUtils) {
              return intlTelInputUtils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
            }
            return "";
          }
        }, {
          key: "getNumber",
          value: function getNumber(format) {
            if (window.intlTelInputUtils) {
              var iso2 = this.selectedCountryData.iso2;
              return intlTelInputUtils.formatNumber(this._getFullNumber(), iso2, format);
            }
            return "";
          }
        }, {
          key: "getNumberType",
          value: function getNumberType() {
            if (window.intlTelInputUtils) {
              return intlTelInputUtils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
            }
            return -99;
          }
        }, {
          key: "getSelectedCountryData",
          value: function getSelectedCountryData() {
            return this.selectedCountryData;
          }
        }, {
          key: "getValidationError",
          value: function getValidationError() {
            if (window.intlTelInputUtils) {
              var iso2 = this.selectedCountryData.iso2;
              return intlTelInputUtils.getValidationError(this._getFullNumber(), iso2);
            }
            return -99;
          }
        }, {
          key: "isValidNumber",
          value: function isValidNumber() {
            var val = this._getFullNumber().trim();
            var countryCode = this.options.nationalMode ? this.selectedCountryData.iso2 : "";
            return window.intlTelInputUtils ? intlTelInputUtils.isValidNumber(val, countryCode) : null;
          }
        }, {
          key: "setCountry",
          value: function setCountry(originalCountryCode) {
            var countryCode = originalCountryCode.toLowerCase();
            if (!this.selectedFlagInner.classList.contains("iti__".concat(countryCode))) {
              this._setFlag(countryCode);
              this._updateDialCode(this.selectedCountryData.dialCode, false);
              this._triggerCountryChange();
            }
          }
        }, {
          key: "setNumber",
          value: function setNumber(number) {
            var flagChanged = this._updateFlagFromNumber(number);
            this._updateValFromNumber(number);
            if (flagChanged) {
              this._triggerCountryChange();
            }
          }
        }, {
          key: "setPlaceholderNumberType",
          value: function setPlaceholderNumberType(type) {
            this.options.placeholderNumberType = type;
            this._updatePlaceholder();
          }
        }]);
        return Iti2;
      }();
      intlTelInputGlobals.getCountryData = function() {
        return allCountries;
      };
      var injectScript = function injectScript2(path, handleSuccess, handleFailure) {
        var script = document.createElement("script");
        script.onload = function() {
          forEachInstance("handleUtils");
          if (handleSuccess)
            handleSuccess();
        };
        script.onerror = function() {
          forEachInstance("rejectUtilsScriptPromise");
          if (handleFailure)
            handleFailure();
        };
        script.className = "iti-load-utils";
        script.async = true;
        script.src = path;
        document.body.appendChild(script);
      };
      intlTelInputGlobals.loadUtils = function(path) {
        if (!window.intlTelInputUtils && !window.intlTelInputGlobals.startedLoadingUtilsScript) {
          window.intlTelInputGlobals.startedLoadingUtilsScript = true;
          if (typeof Promise !== "undefined") {
            return new Promise(function(resolve, reject) {
              return injectScript(path, resolve, reject);
            });
          }
          injectScript(path);
        }
        return null;
      };
      intlTelInputGlobals.defaults = defaults;
      intlTelInputGlobals.version = "17.0.21";
      return function(input, options) {
        var iti = new Iti(input, options);
        iti._init();
        input.setAttribute("data-intl-tel-input-id", iti.id);
        window.intlTelInputGlobals.instances[iti.id] = iti;
        return iti;
      };
    }();
  });
});
var intlTelInput$1 = intlTelInput;
export default intlTelInput$1;
