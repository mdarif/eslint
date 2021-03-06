/**
 * @fileoverview Rule to flag when initializing to undefined
 * @author Ilya Volodin
 */

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    return {

        "VariableDeclarator": function(node) {
            var name = node.id.name;
            var init = node.init && node.init.name;

            if (init === "undefined") {
                context.report(node, "Variable '{{name}}' initialized to undefined.", { name: name });
            }
        }
    };

};
