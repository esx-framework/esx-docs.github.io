"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.generateTutorial = void 0;
var fs_extra_1 = __importDefault(require("fs-extra"));
var globby_1 = __importDefault(require("globby"));
var path_1 = __importDefault(require("path"));
var blogUtils_1 = require("@docusaurus/plugin-content-blog/lib/blogUtils");
var utils_1 = require("@docusaurus/utils");
// YYYY-MM-DD-{name}.mdx?
var FILENAME_PATTERN = /^(\d{4}-\d{1,2}-\d{1,2})-?(.*?).mdx?$/;
function toUrl(_a) {
    var date = _a.date, link = _a.link;
    return date
        .toISOString()
        .substring(0, "2019-01-01".length)
        .replace(/-/g, "/") + "/" + link;
}
function generateTutorial(contentPaths, _a, options) {
    var siteConfig = _a.siteConfig, siteDir = _a.siteDir;
    return __awaiter(this, void 0, void 0, function () {
        var routeBasePath, _b, baseUrl, sourceFiles, tutorials;
        var _this = this;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    routeBasePath = options.routeBasePath;
                    if (!fs_extra_1["default"].existsSync(contentPaths.contentPath)) {
                        return [2 /*return*/, []];
                    }
                    _b = siteConfig.baseUrl, baseUrl = _b === void 0 ? "" : _b;
                    return [4 /*yield*/, globby_1["default"](options.include, {
                            cwd: contentPaths.contentPath
                        })];
                case 1:
                    sourceFiles = _c.sent();
                    tutorials = [];
                    return [4 /*yield*/, Promise.all(sourceFiles.map(function (sourceFile) { return __awaiter(_this, void 0, void 0, function () {
                            var contentPath, source, aliasedSource, relativePath, fileName, _a, unsafeFrontMatter, content, excerpt, frontMatter, date, match, linkName, dateString, name_1, _b, slug;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0: return [4 /*yield*/, utils_1.getFolderContainingFile(blogUtils_1.getContentPathList(contentPaths), sourceFile)];
                                    case 1:
                                        contentPath = _c.sent();
                                        source = path_1["default"].join(contentPath, sourceFile);
                                        aliasedSource = utils_1.aliasedSitePath(source, siteDir);
                                        relativePath = path_1["default"].relative(siteDir, source);
                                        fileName = path_1["default"].basename(sourceFile);
                                        return [4 /*yield*/, utils_1.parseMarkdownFile(source)];
                                    case 2:
                                        _a = _c.sent(), unsafeFrontMatter = _a.frontMatter, content = _a.content, excerpt = _a.excerpt;
                                        frontMatter = unsafeFrontMatter // TODO add validation + TS assertion?
                                        ;
                                        if (frontMatter.draft && process.env.NODE_ENV === "production") {
                                            return [2 /*return*/];
                                        }
                                        match = fileName.match(FILENAME_PATTERN);
                                        linkName = fileName.replace(/\.mdx?$/, "");
                                        if (match) {
                                            dateString = match[1], name_1 = match[2];
                                            date = new Date(dateString);
                                            linkName = name_1;
                                        }
                                        // Prefer user-defined date.
                                        if (frontMatter.date) {
                                            date = new Date(frontMatter.date);
                                        }
                                        _b = date;
                                        if (_b) return [3 /*break*/, 4];
                                        return [4 /*yield*/, fs_extra_1["default"].stat(source)];
                                    case 3:
                                        _b = (_c.sent()).birthtime;
                                        _c.label = 4;
                                    case 4:
                                        // Use file create time for tutorial
                                        date = _b;
                                        slug = frontMatter.slug || (match ? toUrl({ date: date, link: linkName }) : linkName);
                                        frontMatter.title = frontMatter.title || linkName;
                                        tutorials.push({
                                            id: frontMatter.slug || frontMatter.title,
                                            metadata: {
                                                permalink: utils_1.normalizeUrl([baseUrl, routeBasePath, slug]),
                                                source: aliasedSource,
                                                description: frontMatter.description || excerpt,
                                                date: date,
                                                title: frontMatter.title,
                                                truncated: options.truncateMarker.test(content) || false
                                            }
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 2:
                    _c.sent();
                    tutorials.sort(function (a, b) { return b.metadata.date.getTime() - a.metadata.date.getTime(); });
                    return [2 /*return*/, tutorials];
            }
        });
    });
}
exports.generateTutorial = generateTutorial;
