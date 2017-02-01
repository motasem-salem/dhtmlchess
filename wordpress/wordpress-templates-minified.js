// (C) dhtmlchess.com, Alf Kalleland 2017-02-01 00:14:30
window.chess.isWordPress=true;chess.WPTactics=new Class({Extends:Events,renderTo:undefined,pgn:undefined,controller:undefined,showLabels:undefined,module:undefined,boardSize:undefined,initialize:function(b){this.renderTo=b.renderTo;var c=jQuery(this.renderTo);var a=c.width();c.css("height",Math.round(a+130));this.boardSize=a;this.pgn=b.pgn;this.board=b.board||{};this.arrow=b.arrow||{};this.arrowSolution=b.arrowSolution||{};this.hint=b.hint||{};if(b.docRoot){ludo.config.setDocumentRoot(b.docRoot)}this.module=String.uniqueID();this.showLabels=!ludo.isMobile;if(this.renderTo.substr&&this.renderTo.substr(0,1)!="#"){this.renderTo="#"+this.renderTo}jQuery(document).ready(this.render.bind(this))},render:function(){new chess.view.Chess({renderTo:jQuery(this.renderTo),layout:{type:"fill",height:"matchParent",width:"matchParent"},children:[{layout:{type:"linear",orientation:"vertical"},children:[{height:35,module:this.module,type:"chess.view.metadata.Game",tpl:"#{index} - {white}",cls:"metadata",css:{"text-align":"center","overflow-y":"auto","font-size":"1.2em","font-weight":"bold"}},{layout:{type:"linear",orientation:"horizontal"},css:{"margin-top":2},height:30,children:[{weight:1},{module:this.module,layout:{width:80},type:"chess.view.button.TacticHint",value:chess.getPhrase("Hint")},{module:this.module,layout:{width:80},type:"chess.view.button.TacticSolution",value:chess.getPhrase("Solution")},{module:this.module,layout:{width:80},type:"form.Button",value:chess.getPhrase("Next Game"),listeners:{click:function(){this.controller.loadNextGameFromFile()}.bind(this)}},{weight:1}]},Object.merge({boardLayout:undefined,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg3",boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{height:this.boardSize,},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow),Object.merge({type:"chess.view.highlight.ArrowTactic"},this.arrowSolution),Object.merge({type:"chess.view.highlight.SquareTacticHint"},this.hint)]},this.board),{height:50,module:this.module,comments:false,figurines:"svg_egg",type:"chess.view.notation.TacticPanel"}]}]});var b="wp_"+this.pgn+"_tactics";this.controller=new chess.controller.TacticControllerGui({applyTo:[this.module],pgn:this.pgn,alwaysPlayStartingColor:true,autoMoveDelay:400,gameEndHandler:function(c){c.loadNextGameFromFile()},listeners:{startOfGame:function(){ludo.getLocalStorage().save(b,this.controller.getCurrentModel().getGameIndex())}.bind(this)}});var a=ludo.getLocalStorage().get(b);if(a!=undefined){this.controller.getCurrentModel().setGameIndex(a)}else{a=0}this.controller.loadGameFromFile(a)}});window.chess.isWordPress=true;chess.WPViewer=new Class({Extends:Events,renderTo:undefined,pgn:undefined,controller:undefined,showLabels:undefined,module:undefined,boardSize:undefined,initialize:function(b){this.renderTo=b.renderTo;var c=jQuery(this.renderTo);var a=c.width();c.css("height",Math.round(a+480));this.boardSize=a;this.pgn=b.pgn;this.board=b.board||{};this.arrow=b.arrow||{};this.arrowSolution=b.arrowSolution||{};this.hint=b.hint||{};if(b.docRoot){ludo.config.setDocumentRoot(b.docRoot)}this.module=String.uniqueID();this.showLabels=!ludo.isMobile;if(this.renderTo.substr&&this.renderTo.substr(0,1)!="#"){this.renderTo="#"+this.renderTo}jQuery(document).ready(this.render.bind(this))},render:function(){new chess.view.Chess({renderTo:jQuery(this.renderTo),layout:{type:"fill",height:"matchParent",width:"matchParent"},children:[{layout:{type:"linear",orientation:"vertical"},children:[{height:35,module:this.module,type:"chess.view.metadata.Game",tpl:"{white} vs {black}",cls:"metadata",css:{"text-align":"center","overflow-y":"auto","font-size":"1.2em","font-weight":"bold"}},Object.merge({boardLayout:undefined,id:"tactics_board",type:"chess.view.board.Board",module:this.module,overflow:"hidden",pieceLayout:"svg3",boardCss:{border:0},labels:!ludo.isMobile,labelPos:"outside",layout:{height:"wrap"},plugins:[Object.merge({type:"chess.view.highlight.Arrow"},this.arrow),Object.merge({type:"chess.view.highlight.ArrowTactic"},this.arrowSolution),Object.merge({type:"chess.view.highlight.SquareTacticHint"},this.hint)]},this.board),{type:"chess.view.buttonbar.Bar",layout:{height:40},module:this.module},{type:"chess.view.notation.Panel",height:200,module:this.module,elCss:{border:"1px solid "+chess.THEME.borderColor,"border-bottom-width":0}},{module:this.module,layout:{weight:1},type:"chess.wordpress.GameListGrid",elCss:{border:"1px solid "+chess.THEME.borderColor},css:{"overflow-y":"auto"},dataSource:{id:"gameList",type:"chess.wordpress.GameList",module:this.module,autoload:true,postData:{pgn:this.pgn},listeners:{load:function(a){if(a.length){ludo.get("gameList").selectRecord(a[0])}}},shim:{txt:""}},cols:["white","black","result","event","site"]}]}]});this.controller=new chess.controller.Controller({applyTo:[this.module],pgn:this.pgn,listeners:{}})}});