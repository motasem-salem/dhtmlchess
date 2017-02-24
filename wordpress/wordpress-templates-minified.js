// (C) dhtmlchess.com, Alf Kalleland 2017-02-24 22:33:42
/*
 * Copyright ©2017. dhtmlchess.com. All Rights Reserved.
 * This is a commercial software. See dhtmlchess.com for licensing options.
 *
 * You are free to use/try this software for 30 days without paying any fees.
 *
 * IN NO EVENT SHALL DHTML CHESS BE LIABLE TO ANY PARTY FOR DIRECT, INDIRECT, SPECIAL, INCIDENTAL,
 * OR CONSEQUENTIAL DAMAGES, INCLUDING LOST PROFITS, ARISING OUT OF THE USE OF THIS SOFTWARE AND
 * ITS DOCUMENTATION, EVEN IF DHTML CHESS HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * DHTML CHESS SPECIFICALLY DISCLAIMS ANY WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
 * THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
 * THE SOFTWARE AND ACCOMPANYING DOCUMENTATION, IF ANY, PROVIDED HEREUNDER IS PROVIDED "AS IS".
 * DHTML CHESS HAS NO OBLIGATION TO PROVIDE MAINTENANCE, SUPPORT, UPDATES, ENHANCEMENTS, OR MODIFICATIONS.
 *
 */
 chess.WPTemplate=new Class({Extends:Events,renderTo:undefined,module:undefined,_ready:true,_loadCounter:0,th:undefined,themeObject:undefined,initialize:function(a){this.renderTo=jQuery(a.renderTo);this.module=String.uniqueID();this.themeObject=chess.THEME;this.th=a.theme||a.defaultTheme;this.th="dc-"+this.th;if(!ludo.isMobile){if(a.width){this.renderTo.css("width",a.width)}if(a["float"]){this.renderTo.css("float",a["float"])}}chess.THEME_OVERRIDES=undefined;if(a.docRoot){ludo.config.setDocumentRoot(a.docRoot)}var b=a.theme;if(b){this._ready=false;jQuery("<link/>",{rel:"stylesheet",type:"text/css",href:ludo.config.getDocumentRoot()+"themes/"+b+".css",complete:function(){this.onload()}.bind(this)}).appendTo("head");jQuery.ajax({url:ludo.config.getDocumentRoot()+"themes/"+b+".js",dataType:"script",complete:function(){this.onload()}.bind(this)})}},onload:function(){this._loadCounter++;if(!this._ready&&this._loadCounter==2){this.render()}this._ready=this._loadCounter==2},canRender:function(){return this._ready}});window.chess.isWordPress=true;chess.WPGameTemplate=new Class({Extends:chess.WPTemplate,initialize:function(a){this.parent(a);this.model=a.model||undefined;this.gameId=a.gameId;if(!this.model&&!this.gameId){this.gameId=2}},loadGame:function(){if(this.gameId){jQuery.ajax({url:ludo.config.getUrl(),method:"post",cache:false,dataType:"json",data:{action:"game_by_id",id:this.gameId},complete:function(c,a){this.controller.currentModel.afterLoad();if(a=="success"){var d=c.responseJSON;if(d.success){var b=d.response;this.controller.currentModel.populate(b)}}else{this.fireEvent("wperrror",chess.getPhrase("Could not load game. Try again later"))}}.bind(this),fail:function(b,a){this.fireEvent(a)}.bind(this)})}else{if(this.model){this.controller.currentModel.populate(this.model)}}}});window.chess.isWordPress=true;chess.WPGame1=new Class({Extends:chess.WPGameTemplate,boardSize:undefined,initialize:function(b){this.parent(b);var a=this.renderTo.width();this.renderTo.css("height",Math.ceil(a-150+45+35));this.renderTo.css("position","relative");this.boardSize=a-150;this.bs=this.boardSize>400?this.boardSize:a;if(this.canRender()){this.render()}},render:function(){new chess.view.Chess({renderTo:jQuery(this.renderTo),cls:this.th,layout:{type:"linear",orientation:"vertical",height:"matchParent",width:"matchParent"},children:[{layout:{height:35,width:this.boardSize},module:this.module,type:"chess.view.metadata.Game",tpl:"{white} - {black}",cls:"metadata",css:{"text-align":"center","overflow-y":"auto","font-weight":"bold"}},{layout:{type:"linear",orientation:"horizontal",height:this.boardSize},children:[Object.merge({boardLayout:undefined,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg3",boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{weight:1,height:"wrap"},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow)]},this.board),{id:this.module+"-panel",name:"notation-panel",type:"chess.view.notation.Table",layout:{width:150},elCss:{"margin-left":"2px"},module:this.module}]},{css:{"margin-top":5},type:"chess.view.buttonbar.Bar",layout:{height:45,width:this.bs},module:this.module}]});this.controller=new chess.controller.Controller({applyTo:[this.module]});this.loadGame()}});chess.WPGame2=new Class({Extends:chess.WPGameTemplate,boardSize:undefined,initialize:function(b){this.parent(b);var a=this.renderTo.width();this.renderTo.css("height",a+275);this.boardSize=a;if(this.canRender()){this.render()}},render:function(){new chess.view.Chess({renderTo:jQuery(this.renderTo),cls:this.th,layout:{type:"linear",orientation:"vertical",height:"matchParent",width:"matchParent"},children:[{layout:{height:35,width:this.boardSize},module:this.module,type:"chess.view.metadata.Game",tpl:"{white} - {black}",cls:"metadata",css:{"text-align":"center","overflow-y":"auto","font-size":"1.2em","font-weight":"bold"}},Object.merge({boardLayout:undefined,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg3",boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{weight:1,height:"wrap"},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow)]},this.board),{type:"chess.view.buttonbar.Bar",layout:{height:40,width:this.boardSize},module:this.module},{id:this.module+"-panel",name:"notation-panel",type:"chess.view.notation.Panel",layout:{height:200},elCss:{"margin-left":"2px"},module:this.module}]});this.controller=new chess.controller.Controller({applyTo:[this.module]});this.loadGame()}});window.chess.isWordPress=true;chess.WPGame3=new Class({Extends:chess.WPGameTemplate,boardSize:undefined,initialize:function(b){this.parent(b);var a=this.renderTo.width();this.renderTo.css("height",a-150+42+35);this.boardSize=a-150;if(this.canRender()){this.render()}},render:function(){new chess.view.Chess({renderTo:jQuery(this.renderTo),cls:this.th,layout:{type:"linear",orientation:"vertical",height:"matchParent",width:"matchParent"},children:[{layout:{height:35,width:this.boardSize},module:this.module,type:"chess.view.metadata.Game",tpl:"{white} - {black}",cls:"metadata",css:{"text-align":"center","overflow-y":"auto","font-size":"1.2em","font-weight":"bold"}},{layout:{type:"linear",orientation:"horizontal",height:this.boardSize},children:[Object.merge({boardLayout:undefined,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg3",boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{weight:1,height:"wrap"},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow)]},this.board),{id:this.module+"-panel",name:"notation-panel",type:"chess.view.notation.Table",layout:{width:150},elCss:{"margin-left":"2px"},module:this.module}]},{layout:{type:"linear",orientation:"horizontal",height:40,width:this.boardSize},css:{"margin-top":5},children:[{weight:1},{type:"chess.view.buttonbar.Bar",module:this.module,buttons:["start","previous"],width:85,buttonSize:function(a){return a
}},{type:"chess.view.notation.LastMove",width:80,module:this.module},{type:"chess.view.buttonbar.Bar",module:this.module,buttons:["next","end"],width:85,buttonSize:function(a){return a}},{weight:1},{type:"chess.view.buttonbar.Bar",module:this.module,buttons:["flip"],width:42,buttonSize:function(a){return a*0.9}}]}]});this.controller=new chess.controller.Controller({applyTo:[this.module],examine:false,stockfish:ludo.config.getDocumentRoot()+"stockfish-js/stockfish.js"});this.loadGame()}});window.chess.isWordPress=true;chess.WPGame4=new Class({Extends:chess.WPGameTemplate,boardSize:undefined,initialize:function(b){this.parent(b);var a=this.renderTo.width();this.renderTo.css("height",a+40+35);this.boardSize=a;if(this.canRender()){this.render()}},render:function(){new chess.view.Chess({renderTo:jQuery(this.renderTo),cls:this.th,layout:{type:"linear",orientation:"vertical",height:"matchParent",width:"matchParent"},children:[{layout:{height:35,width:this.boardSize},module:this.module,type:"chess.view.metadata.Game",tpl:"{white} - {black}",cls:"metadata",css:{"text-align":"center","overflow-y":"auto","font-size":"1.2em","font-weight":"bold"}},{layout:{type:"linear",orientation:"horizontal",height:this.boardSize},children:[Object.merge({boardLayout:undefined,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg3",boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{weight:1,height:"wrap"},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow)]},this.board)]},{layout:{type:"linear",orientation:"horizontal",height:40,width:this.boardSize},css:{"margin-top":5},children:[{weight:1},{type:"chess.view.buttonbar.Bar",module:this.module,buttons:["start","previous"],width:85,buttonSize:function(a){return a}},{type:"chess.view.notation.LastMove",width:80,module:this.module},{type:"chess.view.buttonbar.Bar",module:this.module,buttons:["next","end"],width:85,buttonSize:function(a){return a}},{weight:1},{type:"chess.view.buttonbar.Bar",module:this.module,buttons:["flip"],width:42,buttonSize:function(a){return a}}]}]});this.controller=new chess.controller.Controller({applyTo:[this.module]});this.loadGame()}});window.chess.isWordPress=true;chess.WPGame5=new Class({Extends:chess.WPGameTemplate,boardSize:undefined,buttonSize:45,boardWeight:1,notationWeight:0.6,initialize:function(b){this.parent(b);var a=this.renderTo.width();if(ludo.isMobile){this.notationWeight=0}this.boardSize=(a/(this.boardWeight+this.notationWeight));this.renderTo.css("height",this.boardSize+this.buttonSize);this.renderTo.css("position","relative");this.buttons=ludo.isMobile?["start","previous","next","end"]:["flip","start","previous","next","end"];this.configure();if(this.canRender()){this.render()}},configure:function(){this.board=Object.merge({boardLayout:undefined,vAlign:top,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg_bw",background:{borderRadius:0},boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{weight:this.boardWeight,height:"wrap"},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow)]},this.board);chess.THEME_OVERRIDES={"chess.view.board.Board":{background:{borderRadius:"1%"}},"chess.view.buttonbar.Bar":{borderRadius:"10%",styles:{button:{"fill-opacity":0,"stroke-opacity":0},image:{fill:"#777"},buttonOver:{"fill-opacity":0,"stroke-opacity":0},imageOver:{fill:"#555"},buttonDown:{"fill-opacity":0,"stroke-opacity":0},imageDown:{fill:"#444"},buttonDisabled:{"fill-opacity":0,"stroke-opacity":0},imageDisabled:{fill:"#555","fill-opacity":0.3}}}}},render:function(){new chess.view.Chess({renderTo:jQuery(this.renderTo),cls:this.th,layout:{type:"linear",orientation:"vertical",height:"matchParent",width:"matchParent"},children:[{layout:{height:this.boardSize,type:"linear",orientation:"horizontal"},children:ludo.isMobile?[this.board]:[this.board,{id:this.module+"-panel",name:"notation-panel",type:"chess.view.notation.Panel",layout:{weight:this.notationWeight,height:"matchParent"},elCss:{"margin-left":"2px"},module:this.module}]},{layout:{type:"linear",orientation:"horizontal",height:this.buttonSize},elCss:{"margin-top":10},children:ludo.isMobile?[{weight:1},{anchor:[0.5,0.5],type:"chess.view.buttonbar.Bar",buttons:["start","previous"],module:this.module,layout:{width:(this.buttonSize)*3},buttonSize:function(a){return a*0.9}},{type:"chess.view.notation.LastMove",module:this.module,layout:{width:this.buttonSize*2},css:{border:"none"}},{anchor:[0.5,0.5],type:"chess.view.buttonbar.Bar",buttons:["next","end"],module:this.module,layout:{width:(this.buttonSize)*2},buttonSize:function(a){return a*0.9}},{weight:1}]:[{weight:1},{anchor:[1,0.5],type:"chess.view.buttonbar.Bar",buttons:this.buttons,module:this.module,layout:{width:(this.buttonSize-10)*5},buttonSize:function(a){return a*0.9}}]}]});this.controller=new chess.controller.Controller({applyTo:[this.module]});this.loadGame()}});window.chess.isWordPress=true;
chess.WPViewer1=new Class({Extends:chess.WPTemplate,renderTo:undefined,pgn:undefined,controller:undefined,showLabels:undefined,module:undefined,boardSize:undefined,initialize:function(b){this.parent(b);this.renderTo=b.renderTo;var c=jQuery(this.renderTo);var a=c.width();if(ludo.isMobile){this.boardSize=a;c.css("height",Math.round(this.boardSize+340))}else{this.boardSize=a-150;c.css("height",Math.round(this.boardSize+375))}this.pgn=b.pgn;this.board=b.board||{};this.arrow=b.arrow||{};this.arrowSolution=b.arrowSolution||{};this.hint=b.hint||{};this.showLabels=!ludo.isMobile;if(this.canRender()){this.render()}},render:function(){new chess.view.Chess({cls:this.th,renderTo:jQuery(this.renderTo),layout:{type:"fill",height:"matchParent",width:"matchParent"},children:ludo.isMobile?this.mobileChildren():this.desktopChildren()});this.controller=new chess.controller.Controller({applyTo:[this.module],pgn:this.pgn.id,listeners:{}})},desktopChildren:function(){return[{layout:{type:"linear",orientation:"vertical"},children:[{layout:{height:35,width:this.boardSize},module:this.module,type:"chess.view.metadata.Game",tpl:"{white} - {black}",cls:"metadata",css:{"text-align":"center","overflow-y":"auto","font-size":"1.2em","font-weight":"bold"}},{layout:{type:"linear",orientation:"horizontal",height:this.boardSize},children:[Object.merge({boardLayout:undefined,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg3",boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{weight:1,height:"wrap"},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow)]},this.board),{id:this.module+"-panel",name:"notation-panel",type:"chess.view.notation.Table",layout:{width:150},elCss:{"margin-left":"2px"},module:this.module}]},{type:"chess.view.buttonbar.Bar",layout:{height:40,width:this.boardSize},module:this.module},{title:this.pgn.name,module:this.module,layout:{height:300},type:"chess.WPGameGrid",css:{"overflow-y":"auto"},cols:["white","black","result"],dataSource:{id:"gameList",type:"chess.wordpress.GameList",module:this.module,autoload:true,postData:{pgn:this.pgn.id},listeners:{select:function(){ludo.$(this.module+"-panel").show()}.bind(this),load:function(a){if(a.length){ludo.get("gameList").selectRecord(a[0])}}},shim:{txt:""}}}]}]},mobileChildren:function(){return[{layout:{type:"linear",orientation:"vertical"},children:[Object.merge({boardLayout:undefined,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg3",boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{height:this.boardSize},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow)]},this.board),{layout:{height:40,type:"linear",orientation:"horizontal"},children:[{weight:1},{type:"chess.view.buttonbar.Bar",layout:{height:40,width:90},module:this.module,buttons:["start","previous"],buttonSize:function(a){return a*0.9}},{type:"chess.view.notation.LastMove",module:this.module,layout:{width:70},css:{"padding-top":4,"padding-bottom":4,border:"none"}},{type:"chess.view.buttonbar.Bar",layout:{height:40,width:90},module:this.module,buttons:["next","end"],buttonSize:function(a){return a*0.9}},{weight:1}]},{title:this.pgn.name,module:this.module,layout:{height:300},type:"chess.WPGameGrid",css:{"overflow-y":"auto"},cols:["white","black","result"],dataSource:{id:"gameList",type:"chess.wordpress.GameList",module:this.module,autoload:true,postData:{pgn:this.pgn.id},listeners:{load:function(a){if(a.length){ludo.get("gameList").selectRecord(a[0])}}},shim:{txt:""}}}]}]}});chess.WPGameGrid=new Class({Extends:chess.view.gamelist.Grid,headerMenu:false,dataSource:{type:"ludo.dataSource.JSONArray",autoload:false,postData:{action:"list_of_games"}},emptyText:chess.getPhrase("No games"),loadMessage:chess.getPhrase("Loading games..."),cols:["white","black","round","result","last_moves"],__construct:function(a){this.cols=a.cols||this.cols;this.parent(a)},loadGames:function(){if(this.getDataSource().postData.pgn){this.load()}},selectGame:function(a){this.fireEvent("selectGame",[a,this.getDataSource().postData.pgn])}});window.chess.isWordPress=true;chess.WPTactics1=new Class({Extends:chess.WPTemplate,renderTo:undefined,pgn:undefined,controller:undefined,showLabels:undefined,module:undefined,boardSize:undefined,initialize:function(b){this.parent(b);this.renderTo=b.renderTo;var c=jQuery(this.renderTo);var a=c.width();c.css("height",Math.round(a+130));this.boardSize=a;this.pgn=b.pgn;this.board=b.board||{};this.arrow=b.arrow||{};this.arrowSolution=b.arrowSolution||{};this.hint=b.hint||{};this.module=String.uniqueID();this.showLabels=!ludo.isMobile;if(this.renderTo.substr&&this.renderTo.substr(0,1)!="#"){this.renderTo="#"+this.renderTo}if(this.canRender()){this.render()}},render:function(){new chess.view.Chess({cls:this.th,renderTo:jQuery(this.renderTo),layout:{type:"fill",height:"matchParent",width:"matchParent"},children:[{layout:{type:"linear",orientation:"vertical"},children:[{height:35,module:this.module,type:"chess.view.metadata.Game",tpl:"#{index} - {white}",cls:"metadata",css:{"text-align":"center","overflow-y":"auto","font-size":"1.2em","font-weight":"bold"}},{layout:{type:"linear",orientation:"horizontal"},css:{"margin-top":2},height:30,children:[{weight:1},{module:this.module,layout:{width:80},type:"chess.view.button.TacticHint",value:chess.getPhrase("Hint")},{module:this.module,layout:{width:80},type:"chess.view.button.TacticSolution",value:chess.getPhrase("Solution")},{module:this.module,layout:{width:80},type:"form.Button",value:chess.getPhrase("Next Game"),listeners:{click:function(){this.controller.loadNextGameFromFile()
}.bind(this)}},{weight:1}]},Object.merge({boardLayout:undefined,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg3",boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{height:this.boardSize,},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow),Object.merge({type:"chess.view.highlight.ArrowTactic"},this.arrowSolution),Object.merge({type:"chess.view.highlight.SquareTacticHint"},this.hint)]},this.board),{height:50,module:this.module,comments:false,figurines:"svg_egg",type:"chess.view.notation.TacticPanel"}]}]});var b="wp_"+this.pgn.id+"_tactics";this.controller=new chess.controller.TacticControllerGui({applyTo:[this.module],pgn:this.pgn.id,alwaysPlayStartingColor:true,autoMoveDelay:400,gameEndHandler:function(c){c.loadNextGameFromFile()},listeners:{startOfGame:function(){ludo.getLocalStorage().save(b,this.controller.getCurrentModel().getGameIndex())}.bind(this)}});var a=ludo.getLocalStorage().get(b,0);if(isNaN(a)){a=0}a=Math.max(0,a);if(a!=undefined){this.controller.getCurrentModel().setGameIndex(a)}else{a=0}this.controller.loadGameFromFile(a)}});chess.WPFen=new Class({Extends:chess.WPTemplate,fen:undefined,initialize:function(b){this.parent(b);var a=this.renderTo.width();this.renderTo.css("height",a);this.fen=b.fen;if(this.canRender()){this.render()}},render:function(){new chess.view.Chess({cls:this.th,renderTo:jQuery(this.renderTo),layout:{type:"fill"},children:[{type:"chess.view.board.Board",fen:this.fen,layout:{width:"matchParent",height:"matchParent"}}]})}});