// (C) dhtmlchess.com, Alf Kalleland 2017-02-07 21:38:42
chess.WPTemplate=new Class({Extends:Events,renderTo:undefined,module:undefined,initialize:function(a){this.renderTo=jQuery(a.renderTo);this.module=String.uniqueID();if(a.docRoot){ludo.config.setDocumentRoot(a.docRoot)}}});window.chess.isWordPress=true;chess.WPGameTemplate=new Class({Extends:chess.WPTemplate,initialize:function(a){this.parent(a);this.gameId=a.gameId||2},loadGame:function(){jQuery.ajax({url:ludo.config.getUrl(),method:"post",cache:false,dataType:"json",data:{action:"game_by_id",id:this.gameId},complete:function(c,a){this.controller.currentModel.afterLoad();if(a=="success"){var d=c.responseJSON;if(d.success){var b=d.response;this.controller.currentModel.populate(b)}}else{this.fireEvent("wperrror",chess.getPhrase("Could not load game. Try again later"))}}.bind(this),fail:function(b,a){this.fireEvent(a)}.bind(this)})}});window.chess.isWordPress=true;chess.WPGameTemplate=new Class({Extends:chess.WPTemplate,initialize:function(a){this.parent(a);this.gameId=a.gameId||2},loadGame:function(){jQuery.ajax({url:ludo.config.getUrl(),method:"post",cache:false,dataType:"json",data:{action:"game_by_id",id:this.gameId},complete:function(c,a){this.controller.currentModel.afterLoad();if(a=="success"){var d=c.responseJSON;if(d.success){var b=d.response;this.controller.currentModel.populate(b)}}else{this.fireEvent("wperrror",chess.getPhrase("Could not load game. Try again later"))}}.bind(this),fail:function(b,a){this.fireEvent(a)}.bind(this)})}});window.chess.isWordPress=true;chess.WPGame1=new Class({Extends:chess.WPGameTemplate,boardSize:undefined,initialize:function(b){this.parent(b);var a=this.renderTo.width();this.renderTo.css("height",a-150+40+35);this.boardSize=a-150;jQuery(document).ready(this.render.bind(this))},render:function(){new chess.view.Chess({renderTo:jQuery(this.renderTo),layout:{type:"linear",orientation:"vertical",height:"matchParent",width:"matchParent"},children:[{layout:{height:35,width:this.boardSize},module:this.module,type:"chess.view.metadata.Game",tpl:"{white} - {black}",cls:"metadata",css:{"text-align":"center","overflow-y":"auto","font-size":"1.2em","font-weight":"bold"}},{layout:{type:"linear",orientation:"horizontal",height:this.boardSize},children:[Object.merge({boardLayout:undefined,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg3",boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{weight:1,height:"wrap"},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow)]},this.board),{id:this.module+"-panel",name:"notation-panel",type:"chess.view.notation.Table",layout:{width:150},elCss:{"margin-left":"2px"},module:this.module}]},{type:"chess.view.buttonbar.Bar",layout:{height:40,width:this.boardSize},module:this.module}]});this.controller=new chess.controller.Controller({applyTo:[this.module]});this.loadGame()}});console.log("game2");chess.WPGame2=new Class({Extends:chess.WPGameTemplate,boardSize:undefined,initialize:function(b){this.parent(b);var a=this.renderTo.width();this.renderTo.css("height",a+275);this.boardSize=a;jQuery(document).ready(this.render.bind(this))},render:function(){new chess.view.Chess({renderTo:jQuery(this.renderTo),layout:{type:"linear",orientation:"vertical",height:"matchParent",width:"matchParent"},children:[{layout:{height:35,width:this.boardSize},module:this.module,type:"chess.view.metadata.Game",tpl:"{white} - {black}",cls:"metadata",css:{"text-align":"center","overflow-y":"auto","font-size":"1.2em","font-weight":"bold"}},Object.merge({boardLayout:undefined,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg3",boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{weight:1,height:"wrap"},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow)]},this.board),{type:"chess.view.buttonbar.Bar",layout:{height:40,width:this.boardSize},module:this.module},{id:this.module+"-panel",name:"notation-panel",type:"chess.view.notation.Panel",layout:{height:200},elCss:{"margin-left":"2px"},module:this.module}]});this.controller=new chess.controller.Controller({applyTo:[this.module]});this.loadGame()}});window.chess.isWordPress=true;chess.WPGame3=new Class({Extends:chess.WPGameTemplate,boardSize:undefined,initialize:function(b){this.parent(b);var a=this.renderTo.width();this.renderTo.css("height",a-150+40+35+270);this.boardSize=a-150;jQuery(document).ready(this.render.bind(this))},render:function(){new chess.view.Chess({renderTo:jQuery(this.renderTo),layout:{type:"linear",orientation:"vertical",height:"matchParent",width:"matchParent"},children:[{layout:{height:35,width:this.boardSize},module:this.module,type:"chess.view.metadata.Game",tpl:"{white} - {black}",cls:"metadata",css:{"text-align":"center","overflow-y":"auto","font-size":"1.2em","font-weight":"bold"}},{layout:{type:"linear",orientation:"horizontal",height:this.boardSize},children:[Object.merge({boardLayout:undefined,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg3",boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{weight:1,height:"wrap"},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow)]},this.board),{id:this.module+"-panel",name:"notation-panel",type:"chess.view.notation.Table",layout:{width:150},elCss:{"margin-left":"2px"},module:this.module}]},{type:"chess.view.buttonbar.Bar",layout:{height:40,width:this.boardSize},module:this.module},{type:"chess.wordpress.ComputerEval",buttons:false,layout:{height:270},module:this.module}]});
this.controller=new chess.controller.StockfishEngineController({applyTo:[this.module],examine:false,stockfish:ludo.config.getDocumentRoot()+"stockfish-js/stockfish.js"});this.loadGame()}});chess.WPGameGrid=new Class({Extends:chess.view.gamelist.Grid,headerMenu:false,dataSource:{type:"ludo.dataSource.JSONArray",autoload:false,postData:{action:"list_of_games"}},emptyText:chess.getPhrase("No games"),loadMessage:chess.getPhrase("Loading games..."),cols:["white","black","round","result","last_moves"],__construct:function(a){this.cols=a.cols||this.cols;this.parent(a)},loadGames:function(){if(this.getDataSource().postData.pgn){this.load()}},selectGame:function(a){this.fireEvent("selectGame",[a,this.getDataSource().postData.pgn])}});window.chess.isWordPress=true;chess.WPTactics=new Class({Extends:Events,renderTo:undefined,pgn:undefined,controller:undefined,showLabels:undefined,module:undefined,boardSize:undefined,initialize:function(b){this.renderTo=b.renderTo;var c=jQuery(this.renderTo);var a=c.width();c.css("height",Math.round(a+130));this.boardSize=a;this.pgn=b.pgn;this.board=b.board||{};this.arrow=b.arrow||{};this.arrowSolution=b.arrowSolution||{};this.hint=b.hint||{};if(b.docRoot){ludo.config.setDocumentRoot(b.docRoot)}this.module=String.uniqueID();this.showLabels=!ludo.isMobile;if(this.renderTo.substr&&this.renderTo.substr(0,1)!="#"){this.renderTo="#"+this.renderTo}jQuery(document).ready(this.render.bind(this))},render:function(){new chess.view.Chess({renderTo:jQuery(this.renderTo),layout:{type:"fill",height:"matchParent",width:"matchParent"},children:[{layout:{type:"linear",orientation:"vertical"},children:[{height:35,module:this.module,type:"chess.view.metadata.Game",tpl:"#{index} - {white}",cls:"metadata",css:{"text-align":"center","overflow-y":"auto","font-size":"1.2em","font-weight":"bold"}},{layout:{type:"linear",orientation:"horizontal"},css:{"margin-top":2},height:30,children:[{weight:1},{module:this.module,layout:{width:80},type:"chess.view.button.TacticHint",value:chess.getPhrase("Hint")},{module:this.module,layout:{width:80},type:"chess.view.button.TacticSolution",value:chess.getPhrase("Solution")},{module:this.module,layout:{width:80},type:"form.Button",value:chess.getPhrase("Next Game"),listeners:{click:function(){this.controller.loadNextGameFromFile()}.bind(this)}},{weight:1}]},Object.merge({boardLayout:undefined,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg3",boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{height:this.boardSize,},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow),Object.merge({type:"chess.view.highlight.ArrowTactic"},this.arrowSolution),Object.merge({type:"chess.view.highlight.SquareTacticHint"},this.hint)]},this.board),{height:50,module:this.module,comments:false,figurines:"svg_egg",type:"chess.view.notation.TacticPanel"}]}]});var b="wp_"+this.pgn+"_tactics";this.controller=new chess.controller.TacticControllerGui({applyTo:[this.module],pgn:this.pgn,alwaysPlayStartingColor:true,autoMoveDelay:400,gameEndHandler:function(c){c.loadNextGameFromFile()},listeners:{startOfGame:function(){ludo.getLocalStorage().save(b,this.controller.getCurrentModel().getGameIndex())}.bind(this)}});var a=ludo.getLocalStorage().get(b);if(a!=undefined){this.controller.getCurrentModel().setGameIndex(a)}else{a=0}this.controller.loadGameFromFile(a)}});window.chess.isWordPress=true;chess.WPViewer=new Class({Extends:chess.WPTemplate,renderTo:undefined,pgn:undefined,controller:undefined,showLabels:undefined,module:undefined,boardSize:undefined,initialize:function(b){this.renderTo=b.renderTo;var c=jQuery(this.renderTo);var a=c.width();c.css("height",Math.round(a+480));this.boardSize=a-150;this.pgn=b.pgn;this.board=b.board||{};this.arrow=b.arrow||{};this.arrowSolution=b.arrowSolution||{};this.hint=b.hint||{};this.showLabels=!ludo.isMobile;if(this.renderTo.substr&&this.renderTo.substr(0,1)!="#"){this.renderTo="#"+this.renderTo}jQuery(document).ready(this.render.bind(this))},render:function(){new chess.view.Chess({renderTo:jQuery(this.renderTo),layout:{type:"fill",height:"matchParent",width:"matchParent"},children:[{layout:{type:"linear",orientation:"vertical"},children:[{layout:{height:35,width:this.boardSize},module:this.module,type:"chess.view.metadata.Game",tpl:"{white} - {black}",cls:"metadata",css:{"text-align":"center","overflow-y":"auto","font-size":"1.2em","font-weight":"bold"}},{layout:{type:"linear",orientation:"horizontal",height:this.boardSize},children:[Object.merge({boardLayout:undefined,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg3",boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{weight:1,height:"wrap"},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow)]},this.board),{id:this.module+"-panel",name:"notation-panel",type:"chess.view.notation.Table",layout:{width:150},elCss:{"margin-left":"2px"},module:this.module}]},{type:"chess.view.buttonbar.Bar",layout:{height:40,width:this.boardSize},module:this.module},{name:"tablayout",layout:{height:300,type:"tabs",tabs:"top"},elCss:{border:"1px solid "+chess.THEME.borderColor},children:[{title:this.pgn.name,module:this.module,layout:{weight:1},type:"chess.WPGameGrid",css:{"overflow-y":"auto"},cols:["white","black","result"],dataSource:{id:"gameList",type:"chess.wordpress.GameList",module:this.module,autoload:true,postData:{pgn:this.pgn.id},listeners:{select:function(){ludo.$(this.module+"-panel").show()
}.bind(this),load:function(a){if(a.length){ludo.get("gameList").selectRecord(a[0])}}},shim:{txt:""}}}]}]}]});this.controller=new chess.controller.Controller({applyTo:[this.module],pgn:this.pgn.id,listeners:{}})}});chess.WPTemplate=new Class({Extends:Events,renderTo:undefined,module:undefined,initialize:function(a){this.renderTo=jQuery(a.renderTo);this.module=String.uniqueID();if(a.docRoot){ludo.config.setDocumentRoot(a.docRoot)}}});