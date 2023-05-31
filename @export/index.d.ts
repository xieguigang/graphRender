﻿// export R# source type define for javascript/typescript language
//
// package_source=WorkflowRender

declare namespace WorkflowRender {
   module _ {
      /**
      */
      function get_context(): object;
      /**
      */
      function internal_call(app: any, context: any): object;
      /**
      */
      function onLoad(): object;
   }
   /**
     * @param disables default value Is ``Call "list"()``.
   */
   function __runImpl(context: any, disables?: any): object;
   /**
     * @param desc default value Is ``no description``.
     * @param dependency default value Is ``null``.
   */
   function app(name: any, analysis: any, desc?: string, dependency?: any): object;
   module app_check {
      /**
      */
      function delegate(analysis: any): object;
      /**
      */
      function signature(app: any): object;
   }
   module check_dependency {
      /**
      */
      function context_env(requires: any, context: any): object;
      /**
      */
      function localfiles(requires: any, context: any): object;
   }
   module dependency {
      /**
      */
      function context_env_missing(context: any): object;
      /**
      */
      function workfiles_missing(file: any): object;
   }
   /**
     * @param app default value Is ``null``.
   */
   function echo_warning(msg: any, app?: any): object;
   /**
   */
   function finalize(): object;
   /**
   */
   function get_app_name(app: any): object;
   /**
   */
   function hook(app: any): object;
   /**
     * @param outputdir default value Is ``./``.
   */
   function init_context(outputdir?: string): object;
   /**
     * @param registry default value Is ``null``.
     * @param disables default value Is ``Call "list"()``.
   */
   function run(registry?: any, disables?: any): object;
   /**
     * @param configs default value Is ``Call "list"()``.
   */
   function set_config(configs?: any): object;
   /**
     * @param context_env default value Is ``Call "list"()``.
     * @param workfiles default value Is ``Call "list"()``.
   */
   function set_dependency(context_env?: any, workfiles?: any): object;
   /**
     * @param flag default value Is ``true``.
   */
   function set_disable(app: any, flag?: boolean): object;
   /**
   */
   function throw_err(msg: any): object;
   /**
   */
   function workdir_root(): object;
   /**
   */
   function workspace(app: any): object;
}
