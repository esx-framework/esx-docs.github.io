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
exports.validateOptions = void 0;
var lodash_1 = require("lodash");
var path_1 = __importDefault(require("path"));
var constants_1 = require("@docusaurus/core/lib/constants");
var blogUtils_1 = require("@docusaurus/plugin-content-blog/lib/blogUtils");
var utils_1 = require("@docusaurus/utils");
var schema_1 = require("./schema");
var utils_2 = require("./utils");
function pluginContentTutorial(context, options) {
    var _a;
    var siteDir = context.siteDir, onBrokenMarkdownLinks = context.siteConfig.onBrokenMarkdownLinks, generatedFilesDir = context.generatedFilesDir, currentLocale = context.i18n.currentLocale;
    var truncateMarker = options.truncateMarker;
    var contentPaths = {
        contentPath: path_1["default"].resolve(siteDir, options.path),
        contentPathLocalized: utils_1.getPluginI18nPath({
            siteDir: siteDir,
            locale: currentLocale,
            pluginName: "plugin-content-tutorial",
            pluginId: options.id
        })
    };
    var pluginId = (_a = options.id) !== null && _a !== void 0 ? _a : constants_1.DEFAULT_PLUGIN_ID;
    var pluginDataDirRoot = path_1["default"].join(generatedFilesDir, "plugin-content-tutorial");
    var dataDir = path_1["default"].join(pluginDataDirRoot, pluginId);
    var aliasedSource = function (source) {
        return "~tutorial/" + path_1["default"].relative(pluginDataDirRoot, source);
    };
    var tutorials = [];
    return {
        name: "plugin-content-tutorial",
        getPathsToWatch: function () {
            var _a = options.include, include = _a === void 0 ? [] : _a;
            return lodash_1.flatten(blogUtils_1.getContentPathList(contentPaths).map(function (contentPath) {
                return include.map(function (pattern) { return contentPath + "/" + pattern; });
            }));
        },
        loadContent: function () {
            return __awaiter(this, void 0, void 0, function () {
                var routeBasePath, _a, baseUrl, permalink;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            routeBasePath = options.routeBasePath;
                            return [4 /*yield*/, utils_2.generateTutorial(contentPaths, context, options)];
                        case 1:
                            tutorials = _b.sent();
                            if (!tutorials || !tutorials.length) {
                                return [2 /*return*/, null];
                            }
                            _a = context.siteConfig.baseUrl, baseUrl = _a === void 0 ? "" : _a;
                            permalink = utils_1.normalizeUrl([baseUrl, routeBasePath]);
                            return [2 /*return*/, {
                                    tutorials: tutorials,
                                    tutorialList: {
                                        metadata: {
                                            permalink: permalink,
                                            tutorialDescription: options.tutorialDescription,
                                            tutorialTitle: options.tutorialTitle
                                        },
                                        items: tutorials.map(function (item) { return item.id; })
                                    }
                                }];
                    }
                });
            });
        },
        contentLoaded: function (_a) {
            var content = _a.content, actions = _a.actions;
            return __awaiter(this, void 0, void 0, function () {
                var tutorialList, tutorials, addRoute, createData, tutorialListComponent, tutorialPostComponent, itemsToMetadata, metadata, items, permalink, pageMetadataPath;
                var _this = this;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (!content) {
                                return [2 /*return*/];
                            }
                            tutorialList = content.tutorialList, tutorials = content.tutorials;
                            addRoute = actions.addRoute, createData = actions.createData;
                            tutorialListComponent = options.tutorialListComponent, tutorialPostComponent = options.tutorialPostComponent;
                            itemsToMetadata = {};
                            // Create routes for tutorials (individual)
                            return [4 /*yield*/, Promise.all(tutorials.map(function (tutorial) { return __awaiter(_this, void 0, void 0, function () {
                                    var id, metadata;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                id = tutorial.id, metadata = tutorial.metadata;
                                                return [4 /*yield*/, createData(
                                                    // Note that this created data path must be in sync with
                                                    // metadataPath provided to mdx-loader.
                                                    utils_1.docuHash(metadata.source) + ".json", JSON.stringify(metadata, null, 2))];
                                            case 1:
                                                _a.sent();
                                                addRoute({
                                                    path: metadata.permalink,
                                                    component: tutorialPostComponent,
                                                    exact: true,
                                                    modules: {
                                                        content: metadata.source
                                                    }
                                                });
                                                itemsToMetadata[id] = metadata;
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }))
                                // Create routes for tutorials summary
                            ];
                        case 1:
                            // Create routes for tutorials (individual)
                            _b.sent();
                            metadata = tutorialList.metadata, items = tutorialList.items;
                            permalink = metadata.permalink;
                            return [4 /*yield*/, createData(utils_1.docuHash(permalink) + ".json", JSON.stringify(metadata, null, 2))];
                        case 2:
                            pageMetadataPath = _b.sent();
                            addRoute({
                                path: permalink,
                                component: tutorialListComponent,
                                exact: true,
                                modules: {
                                    items: items.map(function (id) {
                                        // To tell routes.js this is an import and not a nested object to recurse.
                                        return {
                                            content: {
                                                __import: true,
                                                path: itemsToMetadata[id].source,
                                                query: {
                                                    truncated: true
                                                }
                                            }
                                        };
                                    }),
                                    metadata: aliasedSource(pageMetadataPath)
                                }
                            });
                            return [2 /*return*/];
                    }
                });
            });
        },
        configureWebpack: function (_config, isServer, _a) {
            var getJSLoader = _a.getJSLoader;
            var markdownLoaderOptions = {
                siteDir: siteDir,
                contentPaths: contentPaths,
                truncateMarker: truncateMarker,
                tutorials: tutorials,
                onBrokenMarkdownLink: function (brokenMarkdownLink) {
                    if (onBrokenMarkdownLinks === "ignore") {
                        return;
                    }
                    utils_1.reportMessage("Tutorial markdown link couldn't be resolved: (" + brokenMarkdownLink.link + ") in " + brokenMarkdownLink.filePath, onBrokenMarkdownLinks);
                }
            };
            return {
                resolve: {
                    alias: {
                        "~tutorial": pluginDataDirRoot
                    }
                },
                module: {
                    rules: [
                        {
                            test: /(\.mdx?)$/,
                            include: blogUtils_1.getContentPathList(contentPaths),
                            use: [
                                getJSLoader({ isServer: isServer }),
                                {
                                    loader: require.resolve("@docusaurus/mdx-loader"),
                                    options: {
                                        remarkPlugins: options.remarkPlugins,
                                        rehypePlugins: options.rehypePlugins,
                                        staticDir: path_1["default"].join(siteDir, constants_1.STATIC_DIR_NAME),
                                        metadataPath: function (mdxPath) {
                                            var aliasedPath = utils_1.aliasedSitePath(mdxPath, siteDir);
                                            return path_1["default"].join(dataDir, utils_1.docuHash(aliasedPath) + ".json");
                                        }
                                    }
                                },
                                {
                                    loader: path_1["default"].resolve(__dirname, "./markdownLoader.js"),
                                    options: markdownLoaderOptions
                                },
                            ].filter(Boolean)
                        },
                    ]
                }
            };
        }
    };
}
exports["default"] = pluginContentTutorial;
function validateOptions(_a) {
    var validate = _a.validate, options = _a.options;
    var validatedOptions = validate(schema_1.PluginOptionSchema, options);
    return validatedOptions;
}
exports.validateOptions = validateOptions;
