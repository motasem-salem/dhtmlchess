<?php
// @codingStandardsIgnoreFile
// @codeCoverageIgnoreStart
// this is an autogenerated file - do not edit
spl_autoload_register(
    function($class) {
        static $classes = null;
        if ($classes === null) {
            $classes = array(
                'allservices' => '/php/chessDB/AllServices.php',
                'board0x88config' => '/php/parser/Board0x88Config.php',
                'chess_json' => '/php/parser/CHESS_JSON.php',
                'chessdbinstaller' => '/php/chessDB/ChessDBInstaller.php',
                'chessfileupload' => '/php/chessDB/ChessFileUpload.php',
                'chessfs' => '/php/chessFS/ChessFS.php',
                'chessfspgn' => '/php/chessFS/ChessFSPgn.php',
                'chessregistry' => '/php/ChessRegistry.php',
                'chessroles' => '/php/chessDB/Roles.php',
                'chesstests' => '/php/chessDB/Tests/ChessTests.php',
                'configparsertest' => '/php/chessDB/ludoDB/Tests/ConfigParserTest.php',
                'configparsertestjson' => '/php/chessDB/ludoDB/Tests/ConfigParserTestJSON.php',
                'currentplayer' => '/php/chessDB/player/CurrentPlayer.php',
                'database' => '/php/chessDB/Database.php',
                'databases' => '/php/chessDB/Databases.php',
                'dgtgameparser' => '/php/parser/DGTGameParser.php',
                'eco' => '/php/chessDB/eco/Eco.php',
                'ecomoves' => '/php/chessDB/eco/EcoMoves.php',
                'elo' => '/php/chessDB/Elo.php',
                'elosetter' => '/php/chessDB/EloSetter.php',
                'fen' => '/php/chessDB/Fen.php',
                'fenparser0x88' => '/php/parser/FenParser0x88.php',
                'fentest' => '/php/chessDB/Tests/FenTest.php',
                'folder' => '/php/chessDB/Folder.php',
                'folders' => '/php/chessDB/Folders.php',
                'forsqltest' => '/php/chessDB/ludoDB/Tests/classes/ForSQLTest.php',
                'fs_gametest' => '/php/chessFS/tests/FS_GameTest.php',
                'fs_testbase' => '/php/chessFS/tests/FS_TestBase.php',
                'game' => '/php/chessDB/game/Game.php',
                'gameimport' => '/php/chessDB/game/GameImport.php',
                'gameparser' => '/php/parser/GameParser.php',
                'games' => '/php/chessDB/game/Games.php',
                'gametest' => '/php/chessDB/Tests/GameTest.php',
                'importtest' => '/php/chessDB/Tests/ImportTest.php',
                'ixhprofruns' => '/php/chessDB/ludoDB/xhprof/xhprof_lib/utils/xhprof_runs.php',
                'jsontest' => '/php/chessDB/ludoDB/Tests/JSONTest.php',
                'leafnode' => '/php/chessDB/ludoDB/Tests/classes/LeafNode.php',
                'leafnodes' => '/php/chessDB/ludoDB/Tests/classes/LeafNodes.php',
                'ludodb' => '/php/chessDB/ludoDB/LudoDB.php',
                'ludodbadapter' => '/php/chessDB/ludoDB/LudoDBInterfaces.php',
                'ludodbadaptertest' => '/php/chessDB/ludoDB/Tests/LudoDBAdapterTest.php',
                'ludodballtests' => '/php/chessDB/ludoDB/Tests/LudoDBAllTests.php',
                'ludodbauthenticator' => '/php/chessDB/ludoDB/LudoDBInterfaces.php',
                'ludodbcache' => '/php/chessDB/ludoDB/LudoDBCache.php',
                'ludodbclassnotfoundexception' => '/php/chessDB/ludoDB/LudoDBExceptions.php',
                'ludodbcollection' => '/php/chessDB/ludoDB/LudoDBCollection.php',
                'ludodbcollectionconfigparser' => '/php/chessDB/ludoDB/LudoDBCollectionConfigParser.php',
                'ludodbconfigparser' => '/php/chessDB/ludoDB/LudoDBConfigParser.php',
                'ludodbconnectionexception' => '/php/chessDB/ludoDB/LudoDBExceptions.php',
                'ludodbexception' => '/php/chessDB/ludoDB/LudoDBExceptions.php',
                'ludodbinvalidargumentsexception' => '/php/chessDB/ludoDB/LudoDBExceptions.php',
                'ludodbinvalidconfigexception' => '/php/chessDB/ludoDB/LudoDBExceptions.php',
                'ludodbinvalidmodeldataexception' => '/php/chessDB/ludoDB/LudoDBExceptions.php',
                'ludodbinvalidserviceexception' => '/php/chessDB/ludoDB/LudoDBExceptions.php',
                'ludodbiterator' => '/php/chessDB/ludoDB/LudoDBIterator.php',
                'ludodbmodel' => '/php/chessDB/ludoDB/LudoDBModel.php',
                'ludodbmodeltests' => '/php/chessDB/ludoDB/Tests/LudoDBModelTests.php',
                'ludodbmysql' => '/php/chessDB/ludoDB/LudoDBMysql.php',
                'ludodbmysqli' => '/php/chessDB/ludoDB/LudoDBMySqlI.php',
                'ludodbobject' => '/php/chessDB/ludoDB/LudoDBObject.php',
                'ludodbobjectnotfoundexception' => '/php/chessDB/ludoDB/LudoDBExceptions.php',
                'ludodbpdo' => '/php/chessDB/ludoDB/LudoDBPDO.php',
                'ludodbpdooracle' => '/php/chessDB/ludoDB/LudoDBPDOOracle.php',
                'ludodbprofiling' => '/php/chessDB/ludoDB/LudoDBProfiling.php',
                'ludodbprogress' => '/php/chessDB/ludoDB/progress/LudoDBProgress.php',
                'ludodbprogresstest' => '/php/chessDB/ludoDB/Tests/LudoDBProgressTest.php',
                'ludodbregistry' => '/php/chessDB/ludoDB/LudoDBRegistry.php',
                'ludodbrequesthandler' => '/php/chessDB/ludoDB/LudoDBRequestHandler.php',
                'ludodbrevision' => '/php/chessDB/ludoDB/LudoDBRevision.php',
                'ludodbservice' => '/php/chessDB/ludoDB/LudoDBInterfaces.php',
                'ludodbservicenotimplementedexception' => '/php/chessDB/ludoDB/LudoDBExceptions.php',
                'ludodbserviceregistry' => '/php/chessDB/ludoDB/LudoDBServiceRegistry.php',
                'ludodbsql' => '/php/chessDB/ludoDB/LudoDBSQL.php',
                'ludodbtreecollection' => '/php/chessDB/ludoDB/LudoDBTreeCollection.php',
                'ludodbtreecollectiontest' => '/php/chessDB/ludoDB/Tests/LudoDBTreeCollectionTest.php',
                'ludodbunauthorizedexception' => '/php/chessDB/ludoDB/LudoDBExceptions.php',
                'ludodbutility' => '/php/chessDB/ludoDB/LudoDBUtility.php',
                'ludodbutilitymock' => '/php/chessDB/ludoDB/Tests/LudoDBUtilityTest.php',
                'ludodbutilitytest' => '/php/chessDB/ludoDB/Tests/LudoDBUtilityTest.php',
                'ludodbvalidationtest' => '/php/chessDB/ludoDB/Tests/LudoDBValidationTest.php',
                'ludodbvalidator' => '/php/chessDB/ludoDB/LudoDBValidator.php',
                'ludojs' => '/php/chessDB/ludoDB/LudoJS.php',
                'ludojstests' => '/php/chessDB/ludoDB/Tests/LudoJSTests.php',
                'metadata' => '/php/chessDB/game/Metadata.php',
                'metadatacollection' => '/php/chessDB/game/MetadataCollection.php',
                'metadatatest' => '/php/chessDB/Tests/MetadataTest.php',
                'metadatavalue' => '/php/chessDB/game/MetadataValue.php',
                'modelwithsqlmethod' => '/php/chessDB/ludoDB/Tests/classes/ModelWithSqlMethod.php',
                'move' => '/php/chessDB/game/Move.php',
                'movebuilder' => '/php/parser/MoveBuilder.php',
                'moves' => '/php/chessDB/game/Moves.php',
                'parsertest' => '/php/parser/test/ParserTest.php',
                'passwordlookup' => '/php/chessDB/PasswordLookup.php',
                'passwordlookuptest' => '/php/chessDB/Tests/PasswordLookupTest.php',
                'pdotests' => '/php/chessDB/ludoDB/Tests/PDOTests.php',
                'performancetest' => '/php/chessDB/ludoDB/Tests/PerformanceTest.php',
                'pgngameparser' => '/php/parser/PgnGameParser.php',
                'pgnparser' => '/php/parser/PgnParser.php',
                'player' => '/php/chessDB/player/Player.php',
                'playerbyemail' => '/php/chessDB/player/PlayerByEmail.php',
                'playerbyname' => '/php/chessDB/player/PlayerByName.php',
                'playerbyusernamepassword' => '/php/chessDB/player/PlayerByUsernamePassword.php',
                'playergames' => '/php/chessDB/player/PlayerGames.php',
                'playertest' => '/php/chessDB/Tests/PlayerTest.php',
                'remotefilereader' => '/php/RemoteFileReader.php',
                'requesthandler' => '/request-handler.php',
                'requesthandlermock' => '/php/chessDB/ludoDB/Tests/classes/RequestHandlerMock.php',
                'requesthandlertest' => '/php/chessDB/ludoDB/Tests/RequestHandlerTest.php',
                'seek' => '/php/chessDB/Seek.php',
                'seeks' => '/php/chessDB/Seeks.php',
                'seektest' => '/php/chessDB/Tests/SeekTest.php',
                'services_json' => '/php/jsonwrapper/JSON/JSON.php',
                'services_json_assocarray_testcase' => '/php/jsonwrapper/JSON/Test-JSON.php',
                'services_json_empties_testcase' => '/php/jsonwrapper/JSON/Test-JSON.php',
                'services_json_encdec_testcase' => '/php/jsonwrapper/JSON/Test-JSON.php',
                'services_json_error' => '/php/jsonwrapper/JSON/JSON.php',
                'services_json_errorsuppression_testcase' => '/php/jsonwrapper/JSON/Test-JSON.php',
                'services_json_nestedarray_testcase' => '/php/jsonwrapper/JSON/Test-JSON.php',
                'services_json_object_testcase' => '/php/jsonwrapper/JSON/Test-JSON.php',
                'services_json_spaces_comments_testcase' => '/php/jsonwrapper/JSON/Test-JSON.php',
                'services_json_unquotedkeys_testcase' => '/php/jsonwrapper/JSON/Test-JSON.php',
                'session' => '/php/chessDB/Session.php',
                'sessiontest' => '/php/chessDB/Tests/SessionTest.php',
                'sqltest' => '/php/chessDB/ludoDB/Tests/SQLTest.php',
                'testbase' => '/php/chessDB/ludoDB/Tests/TestBase.php',
                'testcountry' => '/php/chessDB/ludoDB/Tests/classes/TestCountry.php',
                'testtimer' => '/php/chessDB/ludoDB/Tests/classes/TestTimer.php',
                'timecontrol' => '/php/chessDB/TimeControl.php',
                'timecontrols' => '/php/chessDB/TimeControls.php',
                'xhpprofiling' => '/php/chessDB/ludoDB/xhprof/XHPProfiling.php',
                'xhprofruns_default' => '/php/chessDB/ludoDB/xhprof/xhprof_lib/utils/xhprof_runs.php',

                'dhtmlchessview' => '/php/wordpress/DhtmlChessViews.php',
                'dhtmlchessviews' => '/php/wordpress/DhtmlChessViews.php',
                'dhtmlchessdatabase' => '/php/wordpress/DhtmlChessDatabase.php',
                'dhtmlchessstandings' => '/php/wordpress/DhtmlChessStandings.php',
                'dhtmlchessimportpgn' => '/php/wordpress/DhtmlChessImportPgn.php',
                'dhtmlchessinstaller' => '/php/wordpress/DhtmlChessInstaller.php',
                'dhtmlchesspgn' => '/php/wordpress/DhtmlChessPgn.php',
                'dhtmlchesspgnutil' => '/php/wordpress/DhtmlChessPgnUtil.php',
                'dhtmlchesspgnlist' => '/php/wordpress/DhtmlChessPgnList.php',
                'dhtmlchesscache' => '/php/wordpress/DhtmlChessCache.php',
                'dhtmlchessdraft' => '/php/wordpress/DhtmlChessDraft.php',
                'dhtmlchessexception' => '/php/wordpress/DhtmlChessException.php',
                'dhtmlchesspgnnotfoundexception' => '/php/wordpress/DhtmlChessException.php',
            );
        }
        $cn = strtolower($class);
        if (isset($classes[$cn])) {
            require __DIR__ . $classes[$cn];
        }
    }
);
// @codeCoverageIgnoreEnd