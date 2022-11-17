/**
 * This plugin monkey patches the {% include %} tag and the {% render %} used by Fractal
 * to prefix and suffix each imported component with an HTML comment with its handle
 * e.g.
 *
 * {% render '@icon-star' %}
 *
 * will produce
 *
 * <!-- @icon-start --><icon-star include here /><!-- /@icon-star -->
 *
 */
module.exports = function fractalWrapHandles(Twig) {
	const types = ['Twig.logic.type.include', 'rendertag'];
	types.map((type) => {
		const definition = Twig.logic.handler[type];
		const nudeParse = definition.parse;
		function parseWrapHandle(token, context, chain) {
			return Twig.expression.parseAsync
				.call(this, token.stack, context)
				.then((file) => (Array.isArray(file) ? file.join(', ') : file))
				.then((file) => {
					const result = nudeParse.call(this, token, context, chain);
					result.output = `<!-- ${file} -->${result.output}<!-- /${file} -->`;
					return result;
				});
		}
		if (definition) {
			definition.parse = parseWrapHandle;
		}
	});
};
