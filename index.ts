export enum HookName {
	PAGE_CACHE_UPDATE = "pageCache.update",
	PAGE_CACHE_UPDATE_ALL = "pageCache.updateAll",
	RENDERER_BEFORE_PAGE_COMPILE = "renderer.page.compile.before",
	RENDERER_RENDER_PAGE = "renderer.page.render",
	RENDERER_BEFORE_ELEMENT_COMPILE = "renderer.element.compile.before",
	RENDERER_RENDER_ELEMENT = "renderer.element.render",
	RENDERER_BEFORE_GENERATE_UNOCSS = "renderer.unocss.generate.before",
	JOB_FINISH = "job.finish",
	JOB_ENQUEUED = "job.enqueued",
}
