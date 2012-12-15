/*
 * readable-random
 * https://github.com/anthonyringoet/readable-random
 *
 * Copyright (c) 2012 Anthony Ringoet
 * Licensed under the MIT license.
 */

exports.getString = function(length) {
  var priv = {};
  priv.consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','r','s','t','v','w'];
  priv.vowels = ['a', 'e', 'i', 'o', 'u'];
  priv.result = '';

  priv.getVowel = function(){
    var key = Math.round(Math.random() * priv.vowels.length);
    return priv.vowels[key];
  };

  priv.getConsonant = function(){
    var key = Math.round(Math.random() * priv.consonants.length);
    return priv.consonants[key];
  };

  // default and go
  var loopStat = 0;
  if(!length){
    length = 6;
  }

  while (loopStat < length){
    if(loopStat === null || loopStat % 2){
      priv.result += priv.getVowel();
    }
    else{
      priv.result += priv.getConsonant();
    }
    loopStat++;
  }

  return priv.result;
};
