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

  priv.getLetter = function(datasource){
    var key = Math.round(Math.random() * datasource.length);
    return datasource[key];
  };

  // default and go
  var loopStat = 0;
  if(!length){
    length = 6;
  }

  while (loopStat < length){
    if(loopStat === null || loopStat % 2){
      priv.result += priv.getLetter(priv.vowels);
    }
    else{
      priv.result += priv.getLetter(priv.consonants);
    }
    loopStat++;
  }

  return priv.result;
};
