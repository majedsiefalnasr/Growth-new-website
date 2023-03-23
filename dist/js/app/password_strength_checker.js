('use strict');

// Utilities
import { SUtility } from './utilities/utility.js';

//   _____                                    _       _                        _   _
//  |  __ \                                  | |     | |                      | | | |
//  | |__) |_ _ ___ _____      _____  _ __ __| |  ___| |_ _ __ ___ _ __   __ _| |_| |__
//  |  ___/ _` / __/ __\ \ /\ / / _ \| '__/ _` | / __| __| '__/ _ \ '_ \ / _` | __| '_ \
//  | |  | (_| \__ \__ \\ V  V / (_) | | | (_| | \__ \ |_| | |  __/ | | | (_| | |_| | | |
//  |_|   \__,_|___/___/ \_/\_/ \___/|_|  \__,_| |___/\__|_|  \___|_| |_|\__, |\__|_| |_|
//       | |             | |                                              __/ |
//    ___| |__   ___  ___| | _____ _ __                                  |___/
//   / __| '_ \ / _ \/ __| |/ / _ \ '__|
//  | (__| | | |  __/ (__|   <  __/ |
//   \___|_| |_|\___|\___|_|\_\___|_|
//
//
// Password strength checker
export var password_strength_checker = function () {
  // Get all forms
  let password_inputs = document.querySelectorAll('[data-pass-strength]');

  // Check if required
  if (!password_inputs) return;

  // Loop all forms
  SUtility.each(password_inputs, (pass_el) => {
    let pass_el_id = SUtility.attr(pass_el, 'data-pass-strength'),
      pass_el_input = document.querySelector('input[id="' + pass_el_id + '"]');

    // Check if password strength field has target
    if (!pass_el_input) return;

    let password_progress = pass_el.querySelector('.progress-bar');

    // let password_note = pass_el.querySelector('.notes'),
    //   password_note_estimate = password_note.querySelector('[estimate]'),
    //   password_note_metaphor = password_note.querySelector('[metaphor]'),
    //   password_note_explanation = password_note.querySelector('[explanation]'),
    //   password_note_warning = password_note.querySelector('[warning]'),
    //   password_note_suggestions = password_note.querySelector('[suggestions]');

    pass_el_input.addEventListener('keyup', function () {
      // Ignore if password input is empty
      if (pass_el_input.value == '') {
        // Hide notes
        // SUtility.removeClass(password_note, 'view');

        // Reset score progress
        password_progress.setAttribute('aria-valuenow', '0');
        password_progress.style = '';

        return;
      }

      // Check password strength using ZXCVBN
      let checked = zxcvbn(pass_el_input.value),
        strength = checked.score,
        setScoreProgress_fallback,
        displayEstimate_fallback,
        displayMetaphor_fallback,
        displayWeakExplanation_fallback,
        displayWarning_fallback,
        displaySuggestions_fallback;

      // Sit time to crack password in words
      // displayEstimate_fallback = displayEstimate(
      //   checked.crack_times_seconds.online_no_throttling_10_per_second,
      //   password_note_estimate
      // );

      // Set strength progress
      setScoreProgress_fallback = setScoreProgress(strength, password_progress);

      // Check metaphor
      // displayMetaphor_fallback = displayMetaphor(strength, password_note_metaphor);

      // Check explanation
      // displayWeakExplanation_fallback = displayWeakExplanation(checked.sequence, strength, password_note_explanation);

      // Check warning
      // displayWarning_fallback = displayWarning(checked.feedback.warning, password_note_warning);

      // Check suggestions
      // displaySuggestions_fallback = displaySuggestions(checked.feedback.suggestions, password_note_suggestions);

      // View notes
      // displayEstimate_fallback ||
      // setScoreProgress_fallback ||
      // displayMetaphor_fallback ||
      // displayWeakExplanation_fallback ||
      // displayWarning_fallback ||
      // displaySuggestions_fallback
      //   ? SUtility.addClass(password_note, 'view')
      //   : SUtility.removeClass(password_note, 'view');
    });
  });

  // Helpers
  // Set score progress
  function setScoreProgress(score, container) {
    if (score == 0) {
      container.setAttribute('aria-valuenow', '20');
      container.style = 'width: 20%;';
    } else if (score < 3) {
      container.setAttribute('aria-valuenow', '40');
      container.style = 'width: 40%; background-color: #F6A848';
    } else if (score == 3) {
      container.setAttribute('aria-valuenow', '60');
      container.style = 'width: 60%; background-color: #D7D030';
    } else if (score == 4) {
      container.setAttribute('aria-valuenow', '100');
      container.style = 'width: 100%; background-color: #24AA8E';
    }
  }

  // Convert time to words
  function toWords(number) {
    //is merely seconds, just return rounded number
    if (number < 120) return getNumberWords(number, true) + ' seconds';

    // is minutes
    var hour = 60 * 60;
    if (number < hour) return getNumberWords(number / 60, true) + ' minutes';

    // is hours
    var day = hour * 24;
    if (number < 2 * day) return getNumberWords(number / hour) + ' hours';

    // is days
    var month = day * 30;
    if (number < month) return getNumberWords(number / day) + ' days';

    // is months
    var year = day * 365;
    if (number < year) return getNumberWords(number / month) + ' months';

    // is years
    var century = year * 100;
    if (number < century * 10) return getNumberWords(number / year) + ' years';

    // is centuries
    if (number < century * 100) return getNumberWords(number / century) + ' centuries';

    // more than 100 centuries
    return getNumberWords(number / year) + ' years';
  }

  // Get number words - used to convert time to words on function 'toWords'
  function getNumberWords(number, twoDP) {
    var numberWords = '',
      trillion = Math.pow(10, 12),
      billion = Math.pow(10, 9),
      million = Math.pow(10, 6),
      thousand = Math.pow(10, 4),
      hundred = Math.pow(10, 3),
      decimalPoint;

    while (number / trillion >= 1) {
      numberWords = ' trillion ' + numberWords;
      number = number / trillion;
    }

    while (number / billion >= 1) {
      numberWords = ' billion ' + numberWords;
      number = number / billion;
    }

    while (number / million >= 1) {
      numberWords = ' million ' + numberWords;
      number = number / million;
    }

    while (number / thousand >= 1) {
      numberWords = ' thousand ' + numberWords;
      number = number / thousand;
    }

    while (number / hundred >= 1) {
      numberWords = ' hundred ' + numberWords;
      number = number / hundred;
    }

    twoDP ? (decimalPoint = 100) : (decimalPoint = 1);

    number = Math.round(number * decimalPoint) / decimalPoint;
    numberWords = number + numberWords;

    return numberWords;
  }

  // Display weak password explanation
  function displayEstimate(number, container) {
    // Get time to crack password in words
    var timeInWords = toWords(number);

    // Sit time to crack password in words
    container.innerHTML = '';
    if (timeInWords) container.innerHTML = timeInWords;

    return true;
  }

  // Display weak password explanation
  function displayWeakExplanation(matchSequence, strength, container) {
    var explanation;
    var strengthText = false;

    switch (strength) {
      case 0:
        strengthText = ' very weak ';
        break;
      case 1:
        strengthText = ' weak ';
        break;
      case 2:
        strengthText = ' of medium strength ';
        break;
    }

    if (strengthText) {
      var matchSize = matchSequence.length;
      var pattern = false;
      var dictionary = false;
      var matchType = false;
      var result = new Array();

      for (var i = 0; i < matchSize; i++) {
        pattern = matchSequence[i].pattern;

        let thisType, thisWord;

        switch (pattern) {
          case 'dictionary':
            dictionary = dictionaryType(matchSequence[i]);
            thisType = dictionary['type'];
            thisWord = dictionary['word'];
            if (!result[thisType]) result[thisType] = new Array();

            result[thisType][thisWord] = true;
            break;
          case 'spatial':
            if (matchSequence[i]['graph'] != 'dvorak') {
              if (!result['combination of characters that are close together on the keyboard']) {
                result['combination of characters that are close together on the keyboard'] =
                  new Array();
              }
              thisWord = matchSequence[i]['matched_word'];
              result['combination of characters that are close together on the keyboard'][
                thisWord
              ] = true;
            }
            break;
          case 'sequence':
            if (!result['sequence of characters']) {
              result['sequence of characters'] = new Array();
            }
            thisWord = matchSequence[i]['matched_word'];
            result['sequence of characters'][thisWord] = true;
            break;
        }
      }

      //return;
      var hasWords = false;

      if (matchSize > 0) {
        if (matchSize === 1) explanation = 'Your password is ' + strengthText + ' because it is ';
        else explanation = 'Your password is ' + strengthText + ' because it contains ';

        matchSize = 0;
        for (let h in result) {
          matchSize++;
        }
        var andString = ' ';
        var commaString = ', ';
        var thisCount = 0;
        //gathered all information, now to translate into words
        for (matchType in result) {
          let count = 0;
          for (let h in result[matchType]) {
            count++;
          }
          thisCount++;
          if (thisCount >= matchSize && matchSize != 1) {
            andString = ' and ';
          }
          if (count > 1) {
            explanation += andString + count + ' ' + matchType + 's';
            hasWords = true;
          } else {
            explanation += andString + ' a ' + matchType;
            hasWords = true;
          }
          andString = ', ';
        }
        explanation += '.';
      }
    }

    container.innerHTML = '';
    if (hasWords) container.innerHTML = explanation;

    return true;
  }

  // Display weak password metaphor
  function displayMetaphor(strength, container) {
    var metaphor = '';

    switch (strength) {
      case 0:
        metaphor = '  Oh dear, using that password is like leaving your front door wide open.  ';
        break;
      case 1:
        metaphor = ' Oops, using that password is like leaving your key in the lock.  ';
        break;
      case 2:
        metaphor =
          ' Hmm, using that password is like locking your front door, but leaving the key under the mat.  ';
        break;
      case 3:
        metaphor =
          ' Good, using that password is like locking your front door and keeping the key in a safety deposit box. ';
        break;
      case 4:
        metaphor = ' Fantastic, using that password makes you as secure as Fort Knox. ';
        break;
    }

    container.innerHTML = '<span style="font-weight:bold">Review:</span> ' + metaphor;

    return true;
  }

  // Display weak password warning
  function displayWarning(warning, container) {
    container.innerHTML = warning;

    return true;
  }

  // Display weak password suggestions
  function displaySuggestions(suggestions, container) {
    container.innerHTML = '';

    // Loop suggestions
    SUtility.each(suggestions, (suggestion) => {
      let li = document.createElement('li');
      li.innerHTML = suggestion;

      // Append to view
      container.append(li);
    });

    return true;
  }

  // Get dictionary type
  function dictionaryType(pattern) {
    var word = pattern['matched_word'];
    var dictionary = pattern['dictionary_name'];
    var type = false;
    switch (dictionary) {
      case 'passwords':
        type = 'common password';
        break;
      case 'english':
        type = 'dictionary word';
        break;
      case 'male_names':
        type = 'male name';
        break;
      case 'female_names':
        type = 'female name';
        break;
      case 'surnames':
        type = 'surname';
        break;
    }
    var res = new Array();
    res['word'] = word;
    res['type'] = type;
    return res;
  }
};
