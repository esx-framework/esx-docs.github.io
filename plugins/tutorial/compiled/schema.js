"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
exports.__esModule = true;
exports.PluginOptionSchema = exports.DEFAULT_OPTIONS = void 0;
var Joi = __importStar(require("joi"));
var utils_validation_1 = require("@docusaurus/utils-validation");
exports.DEFAULT_OPTIONS = {
    include: ["*.md", "*.mdx"],
    path: "tutorial",
    remarkPlugins: [],
    rehypePlugins: [],
    routeBasePath: "tutorial",
    truncateMarker: /<!--\s*(truncate)\s*-->/,
    tutorialDescription: "Tutorials",
    tutorialListComponent: "@theme/TutorialListPage",
    tutorialPostComponent: "@theme/TutorialPostPage",
    tutorialTitle: "Tutorials"
};
exports.PluginOptionSchema = Joi.object({
    include: Joi.array().items(Joi.string())["default"](exports.DEFAULT_OPTIONS.include),
    path: Joi.string()["default"](exports.DEFAULT_OPTIONS.path),
    remarkPlugins: utils_validation_1.RemarkPluginsSchema["default"](exports.DEFAULT_OPTIONS.remarkPlugins),
    rehypePlugins: utils_validation_1.RehypePluginsSchema["default"](exports.DEFAULT_OPTIONS.rehypePlugins),
    routeBasePath: Joi.string()["default"](exports.DEFAULT_OPTIONS.routeBasePath),
    truncateMarker: Joi.object()["default"](exports.DEFAULT_OPTIONS.truncateMarker),
    tutorialDescription: Joi.string()["default"](exports.DEFAULT_OPTIONS.tutorialDescription),
    tutorialListComponent: Joi.string()["default"](exports.DEFAULT_OPTIONS.tutorialListComponent),
    tutorialPostComponent: Joi.string()["default"](exports.DEFAULT_OPTIONS.tutorialPostComponent),
    tutorialTitle: Joi.string()["default"](exports.DEFAULT_OPTIONS.tutorialTitle)
});
