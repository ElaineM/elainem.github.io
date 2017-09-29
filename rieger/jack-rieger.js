function consoleAnimation(){
  var sp = ' ';
  var nl = '\n';
  var result = '';

  var t = 0;
  for(var i=0;i<150;i++){
    setTimeout(function(){
      result += '| ';
      console.log(result);
    },t)
    t+=100;
    setTimeout(function(){
      result += '__ ';
      console.log(result);
    },t)
    t+=100;
  }

  var x = 15;
  for(var i=0;i<50;i++){
    setTimeout(function(){
      result += ' |–– ⟩ ●';
      console.log(result);
    },x)
    x+=100;
    setTimeout(function(){
      result += '▂▃▄▅▆▇█▉▂▃▄▅▆▇█▉ ';
      console.log(result);
    },x)
    x+=100;
  }

  var xs = 13000;
  for(var i=0;i<25;i++){
    setTimeout(function(){
      result += '   ';
      console.log(result);
    },xs)
  }

  var y = 20000;
  for(var i=0;i<15;i++){
    setTimeout(function(){
      result += ' /\\ ৲∙৲'+nl;
      console.log(result);
    },y)
    y+=100;
  }

  var z = 25000;
  for(var i=0;i<40;i++){
    setTimeout(function(){
      result += '|( )__)~~ '+nl;
      console.log(result);
    },z)
    z+=50;
    setTimeout(function(){
      result += '. . * ';
      console.log(result);
    },z)
    z+=100;
    setTimeout(function(){
      result += '.   ●   * ';
      console.log(result);
    },z)
    z+=150;
  }

  var w = 31000;
  for(var i=0;i<260;i++){
    setTimeout(function(){
      result += '░░░░░░░░▟▚▛▙▟▚▒▒▒░░░';
      console.log(result);
    },w)
    w+=50;
    setTimeout(function(){
      result += '▚▞▙▛▜▟▒▒▒';
      console.log(result);
    },w)
    w+=50;
    setTimeout(function(){
      result += '░░░░░░░░░░░░░░░░░░░░░░░░';
      console.log(result);
    },w)
    w+=50;
  };

  var jr = 73000;
  setTimeout(function(){
    result+=nl+nl+'     # #####'+nl; 
    result+='     # #    #'+nl; 
    result+='     # #####'+nl;
    result+='#    # #  #'+nl;
    result+=' ####  #    #'+nl; 
    console.log(result);
  },jr)
}
  // cool symbols 
  // ⋮ ⋯ ⋰ ⋱ ⁂ ⏅ ┼ ⏆ ⏉ ⏋ ├ ┤ ⨀ ⨁ ⟤⟥ ⟦ ⟧ ⟨ ⟩ ☃ ☀︎ ☹ ◯ ○ ▷ ▢ ▚▞▙▛▜▟ ░▒ ▂▃▄▅▆▇█▉▊▋▌▍▎▏▕ ◢◣◥◤Ò