var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FarbeLog_1 = __importDefault(require("./FarbeLog"));
FarbeLog_1.default.ok.withHour("starting", "algo");
FarbeLog_1.default.error.withHour("starting", "algo");
FarbeLog_1.default.warning.withHour("starting", "algo");
FarbeLog_1.default.info.withHour("starting", "algo");
FarbeLog_1.default.ok.noWithHour("starting", "algo");
FarbeLog_1.default.error.noWithHour("starting", "algo");
FarbeLog_1.default.warning.noWithHour("starting", "algo");
FarbeLog_1.default.info.noWithHour("starting", "algo");
