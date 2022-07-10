const FerbeLog = require("./FarbeLog");

FerbeLog.default.ok.withHour("starting", "algo");
FerbeLog.default.error.withHour("starting", "algo");
FerbeLog.default.warning.withHour("starting", "algo");
FerbeLog.default.info.withHour("starting", "algo");
FerbeLog.default.ok.noWithHour("starting", "algo");
FerbeLog.default.error.noWithHour("starting", "algo");
FerbeLog.default.warning.noWithHour("starting", "algo");
FerbeLog.default.info.noWithHour("starting", "algo");