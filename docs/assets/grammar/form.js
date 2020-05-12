// Generated automatically by nearley, version 2.19.2
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }


 const moo = require('moo')

	let lexer = moo.compile({
	space: {match: /\s+/, lineBreaks: true},
    number: /0|[1-9][0-9]*/,
    string: /"(?:\\["\\]|[^\n"\\])*"/,
    '{': '{',
    '}': '}',
    '[': '[',
    ']': ']',
    ',': ',',
    ':': ':',
	true: 'true',
    false: 'false',
    null: 'null',
	prop_name: {
      match: /\b(?:name|type|layout|label|controls|validation|select_options|radio_options|select2_options|button_options|sample_data|css)\b/,
      type: moo.keywords({
        propName: ['name','type','layout','label','controls','validation','select_options','radio_options','select2_options','button_options','sample_data','css']
    })
   },
    control_type: {
      match: /\b(?:text|number|email|select|select2|date|radio|checkbox|button)\b/,
      type: moo.keywords({
        controlType: ['text', 'number', 'email', 'select', 'select2', 'date', 'radio', 'checkbox', 'button']
      })
    },
    validators: {
      match: /\b(?:requiredTrue|required|minLength|maxLength|min|max|email|pattern)\b/,
      type: moo.keywords({
        validatorType: ['requiredTrue', 'required', 'minLength', 'maxLength', 'min', 'max', 'email', 'pattern']
      })
    },
    option_prop_name: {
      match: /\b(?:placeholder|itemList|itemValue|itemText|isValueObject|items|ajaxOptions|itemOptions|options|customAdapters|onClick|buttonType|validator|msg|value|data)\b/,
      type: moo.keywords({
        optionProp: ['placeholder', 'itemList', 'itemId', 'itemText', 'isValueObject', 'items', 'ajaxOptions', 'itemOptions', 'options', 'customAdapters', 'onClick', 'buttonType', 'validator', 'msg', 'value', 'data']
      })
    },
    layout_type: {
      match: /\b(?:stack|inline)\b/,
      type: moo.keywords({
        layoutType: ['stack', 'inline']
      })
    },
    button_type: {
      match: /\b(?:button|submit|link)\b/,
      type: moo.keywords({
        buttonType: ['button', 'submit', 'link']
      })
    },
    grid_props: {
      match: /\b(?:paginator|search|selectAll|columns|title|field|width|sort)\b/,
      type: moo.keywords({
        bt: ['paginator', 'search', 'selectAll', 'columns', 'title', 'field', 'width', 'sort']
      })
    },
    identifiers: ['form', 'grid']
  });



function getRootType(d, type) {
   var obj = {
	 type: type,
	 value: d[0]
   };

  return obj;
}

function extractProps(d) {
    let output = [d[2]];
	
	for (let i in d[3]) {
        output.push(d[3][i][3]);
    }
	
	return output;
}

function getDefType(d, type, parseJson) {
  return {
		type: type || 'prop_def',
		name: d[0].value,
		value: parseJson ? JSON.parse(d[4].value) : d[4]
	 };
}

function getKeywordType(d, type) {
  return {
		type: type || 'prop_def',
		name: d[0].value,
		value: d[4][0].value
	 };
}

var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "input$ebnf$1", "symbols": []},
    {"name": "input$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "identifier"]},
    {"name": "input$ebnf$1", "symbols": ["input$ebnf$1", "input$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "input", "symbols": [{"literal":"{"}, "_", "identifier", "input$ebnf$1", "_", {"literal":"}"}], "postprocess": extractProps},
    {"name": "identifier", "symbols": ["form_identifier"], "postprocess": (d) => getRootType(d, 'form_def')},
    {"name": "identifier", "symbols": ["grid_identifier"], "postprocess": (d) => getRootType(d, 'grid_def')},
    {"name": "validation_prop_pair", "symbols": [{"literal":"validator"}, "_", {"literal":":"}, "_", "validators"], "postprocess": d => getKeywordType(d, "validator_def")},
    {"name": "validation_prop_pair", "symbols": [{"literal":"msg"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "validation_prop_pair", "symbols": [{"literal":"value"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "validation_props$ebnf$1", "symbols": []},
    {"name": "validation_props$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "validation_prop_pair"]},
    {"name": "validation_props$ebnf$1", "symbols": ["validation_props$ebnf$1", "validation_props$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "validation_props", "symbols": [{"literal":"{"}, "_", "validation_prop_pair", "validation_props$ebnf$1", "_", {"literal":"}"}], "postprocess":  d => ({
        type: "validation_def",
        value: extractProps(d)
        		 }) },
    {"name": "validation_list$ebnf$1", "symbols": []},
    {"name": "validation_list$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "validation_props"]},
    {"name": "validation_list$ebnf$1", "symbols": ["validation_list$ebnf$1", "validation_list$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "validation_list", "symbols": [{"literal":"["}, "_", "validation_props", "validation_list$ebnf$1", "_", {"literal":"]"}], "postprocess": extractProps},
    {"name": "select_options_prop_pair", "symbols": [{"literal":"placeholder"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d, "option_prop_def")},
    {"name": "select_options_prop_pair", "symbols": [{"literal":"itemList"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d, "option_prop_def")},
    {"name": "select_options_prop_pair", "symbols": [{"literal":"itemValue"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d, "option_prop_def")},
    {"name": "select_options_prop_pair", "symbols": [{"literal":"itemText"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d, "option_prop_def")},
    {"name": "select_options_prop_pair", "symbols": [{"literal":"isValueObject"}, "_", {"literal":":"}, "_", "boolean"], "postprocess": d => getKeywordType(d, "option_prop_def")},
    {"name": "select_options_props$ebnf$1", "symbols": []},
    {"name": "select_options_props$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "select_options_prop_pair"]},
    {"name": "select_options_props$ebnf$1", "symbols": ["select_options_props$ebnf$1", "select_options_props$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "select_options_props", "symbols": [{"literal":"{"}, "_", "select_options_prop_pair", "select_options_props$ebnf$1", "_", {"literal":"}"}], "postprocess": extractProps},
    {"name": "item_prop_pair", "symbols": [{"literal":"label"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "item_prop_pair", "symbols": [{"literal":"value"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "item_props$ebnf$1", "symbols": []},
    {"name": "item_props$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "item_prop_pair"]},
    {"name": "item_props$ebnf$1", "symbols": ["item_props$ebnf$1", "item_props$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "item_props", "symbols": [{"literal":"{"}, "_", "item_prop_pair", "item_props$ebnf$1", "_", {"literal":"}"}], "postprocess":  d => ({
        type: "item_def",
        value: extractProps(d)
        		 }) },
    {"name": "item_list$ebnf$1", "symbols": []},
    {"name": "item_list$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "item_props"]},
    {"name": "item_list$ebnf$1", "symbols": ["item_list$ebnf$1", "item_list$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "item_list", "symbols": [{"literal":"["}, "_", "item_props", "item_list$ebnf$1", "_", {"literal":"]"}], "postprocess": extractProps},
    {"name": "radio_options_prop_pair", "symbols": [{"literal":"layout"}, "_", {"literal":":"}, "_", "layout_type"], "postprocess": d => getKeywordType(d, "layout_type_def")},
    {"name": "radio_options_prop_pair", "symbols": [{"literal":"items"}, "_", {"literal":":"}, "_", "item_list"], "postprocess": d => getDefType(d, "item_list_def")},
    {"name": "radio_options_props$ebnf$1", "symbols": []},
    {"name": "radio_options_props$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "radio_options_prop_pair"]},
    {"name": "radio_options_props$ebnf$1", "symbols": ["radio_options_props$ebnf$1", "radio_options_props$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "radio_options_props", "symbols": [{"literal":"{"}, "_", "radio_options_prop_pair", "radio_options_props$ebnf$1", "_", {"literal":"}"}], "postprocess": extractProps},
    {"name": "select2_options_prop_pair", "symbols": [{"literal":"ajaxOptions"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "select2_options_prop_pair", "symbols": [{"literal":"itemOptions"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "select2_options_prop_pair", "symbols": [{"literal":"options"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "select2_options_prop_pair", "symbols": [{"literal":"customAdapters"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "select2_options_prop_pair", "symbols": [{"literal":"data"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "select2_options_props$ebnf$1", "symbols": []},
    {"name": "select2_options_props$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "select2_options_prop_pair"]},
    {"name": "select2_options_props$ebnf$1", "symbols": ["select2_options_props$ebnf$1", "select2_options_props$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "select2_options_props", "symbols": [{"literal":"{"}, "_", "select2_options_prop_pair", "select2_options_props$ebnf$1", "_", {"literal":"}"}], "postprocess": extractProps},
    {"name": "button_options_prop_pair", "symbols": [{"literal":"buttonType"}, "_", {"literal":":"}, "_", "button_type"], "postprocess": d => getKeywordType(d, "button_type_def")},
    {"name": "button_options_prop_pair", "symbols": [{"literal":"onClick"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "button_options_props$ebnf$1", "symbols": []},
    {"name": "button_options_props$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "button_options_prop_pair"]},
    {"name": "button_options_props$ebnf$1", "symbols": ["button_options_props$ebnf$1", "button_options_props$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "button_options_props", "symbols": [{"literal":"{"}, "_", "button_options_prop_pair", "button_options_props$ebnf$1", "_", {"literal":"}"}], "postprocess": extractProps},
    {"name": "control_prop_pair", "symbols": [{"literal":"name"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "control_prop_pair", "symbols": [{"literal":"type"}, "_", {"literal":":"}, "_", "control_type"], "postprocess": d => getKeywordType(d, "control_type_def")},
    {"name": "control_prop_pair", "symbols": [{"literal":"label"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "control_prop_pair", "symbols": [{"literal":"validation"}, "_", {"literal":":"}, "_", "validation_list"], "postprocess": d => getDefType(d, "validation_list_def")},
    {"name": "control_prop_pair", "symbols": [{"literal":"select_options"}, "_", {"literal":":"}, "_", "select_options_props"], "postprocess": d => getDefType(d, "select_options_def")},
    {"name": "control_prop_pair", "symbols": [{"literal":"radio_options"}, "_", {"literal":":"}, "_", "radio_options_props"], "postprocess": d => getDefType(d, "radio_options_def")},
    {"name": "control_prop_pair", "symbols": [{"literal":"select2_options"}, "_", {"literal":":"}, "_", "select2_options_props"], "postprocess": d => getDefType(d, "select2_options_def")},
    {"name": "control_prop_pair", "symbols": [{"literal":"button_options"}, "_", {"literal":":"}, "_", "button_options_props"], "postprocess": d => getDefType(d, "button_options_def")},
    {"name": "control_props$ebnf$1", "symbols": []},
    {"name": "control_props$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "control_prop_pair"]},
    {"name": "control_props$ebnf$1", "symbols": ["control_props$ebnf$1", "control_props$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "control_props", "symbols": [{"literal":"{"}, "_", "control_prop_pair", "control_props$ebnf$1", "_", {"literal":"}"}], "postprocess":  d => ({
        type: "control_def",
        value: extractProps(d)
        		 }) },
    {"name": "control_list$ebnf$1", "symbols": []},
    {"name": "control_list$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "control_props"]},
    {"name": "control_list$ebnf$1", "symbols": ["control_list$ebnf$1", "control_list$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "control_list", "symbols": [{"literal":"["}, "_", "control_props", "control_list$ebnf$1", "_", {"literal":"]"}], "postprocess": extractProps},
    {"name": "form_prop_pair", "symbols": [{"literal":"name"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "form_prop_pair", "symbols": [{"literal":"layout"}, "_", {"literal":":"}, "_", "layout_type"], "postprocess": d => getKeywordType(d, "layout_type_def")},
    {"name": "form_prop_pair", "symbols": [{"literal":"sample_data"}, "_", {"literal":":"}, "_", "boolean"], "postprocess": d => getDefType(d, "sample_data_def")},
    {"name": "form_prop_pair", "symbols": [{"literal":"css"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "form_prop_pair", "symbols": [{"literal":"controls"}, "_", {"literal":":"}, "_", "control_list"], "postprocess": d => getDefType(d, "controls_def")},
    {"name": "form_props$ebnf$1", "symbols": []},
    {"name": "form_props$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "form_prop_pair"]},
    {"name": "form_props$ebnf$1", "symbols": ["form_props$ebnf$1", "form_props$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "form_props", "symbols": [{"literal":"{"}, "_", "form_prop_pair", "form_props$ebnf$1", "_", {"literal":"}"}], "postprocess": extractProps},
    {"name": "form_identifier", "symbols": [{"literal":"form"}, "_", {"literal":":"}, "_", "form_props"], "postprocess": (d) => { return d[4]}},
    {"name": "control_type", "symbols": [{"literal":"text"}]},
    {"name": "control_type", "symbols": [{"literal":"number"}]},
    {"name": "control_type", "symbols": [{"literal":"email"}]},
    {"name": "control_type", "symbols": [{"literal":"select"}]},
    {"name": "control_type", "symbols": [{"literal":"select2"}]},
    {"name": "control_type", "symbols": [{"literal":"date"}]},
    {"name": "control_type", "symbols": [{"literal":"radio"}]},
    {"name": "control_type", "symbols": [{"literal":"checkbox"}]},
    {"name": "control_type", "symbols": [{"literal":"button"}]},
    {"name": "button_type", "symbols": [{"literal":"button"}]},
    {"name": "button_type", "symbols": [{"literal":"submit"}]},
    {"name": "button_type", "symbols": [{"literal":"link"}]},
    {"name": "layout_type", "symbols": [{"literal":"stack"}]},
    {"name": "layout_type", "symbols": [{"literal":"inline"}]},
    {"name": "validators", "symbols": [{"literal":"requiredTrue"}]},
    {"name": "validators", "symbols": [{"literal":"required"}]},
    {"name": "validators", "symbols": [{"literal":"minLength"}]},
    {"name": "validators", "symbols": [{"literal":"maxLength"}]},
    {"name": "validators", "symbols": [{"literal":"min"}]},
    {"name": "validators", "symbols": [{"literal":"max"}]},
    {"name": "validators", "symbols": [{"literal":"email"}]},
    {"name": "validators", "symbols": [{"literal":"pattern"}]},
    {"name": "column_prop_pair", "symbols": [{"literal":"title"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "column_prop_pair", "symbols": [{"literal":"field"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "column_prop_pair", "symbols": [{"literal":"width"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "column_prop_pair", "symbols": [{"literal":"sort"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "column_props$ebnf$1", "symbols": []},
    {"name": "column_props$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "column_prop_pair"]},
    {"name": "column_props$ebnf$1", "symbols": ["column_props$ebnf$1", "column_props$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "column_props", "symbols": [{"literal":"{"}, "_", "column_prop_pair", "column_props$ebnf$1", "_", {"literal":"}"}], "postprocess":  d => ({
        type: "column_def",
        value: extractProps(d)
        		 }) },
    {"name": "column_list$ebnf$1", "symbols": []},
    {"name": "column_list$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "column_props"]},
    {"name": "column_list$ebnf$1", "symbols": ["column_list$ebnf$1", "column_list$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "column_list", "symbols": [{"literal":"["}, "_", "column_props", "column_list$ebnf$1", "_", {"literal":"]"}], "postprocess": extractProps},
    {"name": "grid_prop_pair", "symbols": [{"literal":"itemList"}, "_", {"literal":":"}, "_", "string"], "postprocess": d => getDefType(d)},
    {"name": "grid_prop_pair", "symbols": [{"literal":"paginator"}, "_", {"literal":":"}, "_", "boolean"], "postprocess": d => getDefType(d)},
    {"name": "grid_prop_pair", "symbols": [{"literal":"search"}, "_", {"literal":":"}, "_", "boolean"], "postprocess": d => getDefType(d)},
    {"name": "grid_prop_pair", "symbols": [{"literal":"selectAll"}, "_", {"literal":":"}, "_", "boolean"], "postprocess": d => getDefType(d)},
    {"name": "grid_prop_pair", "symbols": [{"literal":"columns"}, "_", {"literal":":"}, "_", "column_list"], "postprocess": d => getDefType(d, "columns_def")},
    {"name": "grid_props$ebnf$1", "symbols": []},
    {"name": "grid_props$ebnf$1$subexpression$1", "symbols": ["_", {"literal":","}, "_", "grid_prop_pair"]},
    {"name": "grid_props$ebnf$1", "symbols": ["grid_props$ebnf$1", "grid_props$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "grid_props", "symbols": [{"literal":"{"}, "_", "grid_prop_pair", "grid_props$ebnf$1", "_", {"literal":"}"}], "postprocess": extractProps},
    {"name": "grid_identifier", "symbols": [{"literal":"grid"}, "_", {"literal":":"}, "_", "grid_props"], "postprocess": (d) => { return d[4]}},
    {"name": "boolean", "symbols": [{"literal":"true"}]},
    {"name": "boolean", "symbols": [{"literal":"false"}]},
    {"name": "number", "symbols": [(lexer.has("number") ? {type: "number"} : number)], "postprocess": function(d) { return parseFloat(d[0].value) }},
    {"name": "string", "symbols": [(lexer.has("string") ? {type: "string"} : string)], "postprocess": function(d) { return JSON.parse(d[0].value) }},
    {"name": "_", "symbols": []},
    {"name": "_", "symbols": [(lexer.has("space") ? {type: "space"} : space)], "postprocess": function(d) { return null; }}
]
  , ParserStart: "input"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
