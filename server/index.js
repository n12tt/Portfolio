import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useParams, useLoaderData, useActionData, useMatches, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        ServerRouter,
        {
          context: routerContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const stylesheet = "/assets/app-DgpOdTGp.css";
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}, {
  rel: "stylesheet",
  href: stylesheet
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Navbar = () => {
  return /* @__PURE__ */ jsx("nav", { className: "p-4 bg-gray-800 text-white", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
    /* @__PURE__ */ jsx(Link, { to: "/", className: "text-2xl font-bold", children: "My 3D Portfolio" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "mr-4 hover:text-gray-400", children: "Home" }),
      /* @__PURE__ */ jsx(Link, { to: "/about", className: "hover:text-gray-400", children: "About" })
    ] })
  ] }) });
};
const ThreeDViewer = ({ modelPath, altText, solidWorksPath, drawingPath, annotations = [] }) => {
  useEffect(() => {
    import("@google/model-viewer");
  }, []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  return /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsxs(
    "model-viewer",
    {
      src: modelPath,
      alt: altText,
      "auto-rotate": true,
      "camera-controls": true,
      className: "w-full h-[500px] bg-gray-200 dark:bg-gray-900",
      "environment-image": "neutral",
      "shadow-intensity": "1",
      children: [
        annotations.map((annotation, index) => /* @__PURE__ */ jsx(
          "button",
          {
            slot: `hotspot-${index}`,
            "data-position": annotation.position,
            "data-normal": "0m 1m 0m",
            "data-visibility-attribute": "visible",
            className: "annotation",
            children: annotation.label
          },
          index
        )),
        /* @__PURE__ */ jsx(
          "button",
          {
            className: "absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition",
            title: "Download Files",
            onClick: toggleDropdown,
            children: /* @__PURE__ */ jsx(FontAwesomeIcon, { icon: faDownload, size: "lg" })
          }
        ),
        isDropdownOpen && /* @__PURE__ */ jsxs("div", { className: "absolute bottom-16 right-4 w-48 bg-white dark:bg-gray-800 shadow-lg rounded-md overflow-hidden z-10", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: solidWorksPath,
              download: true,
              className: "block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-700",
              children: "Download SolidWorks File"
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: drawingPath,
              download: true,
              className: "block px-4 py-2 text-gray-800 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-700",
              children: "Download Drawing File"
            }
          )
        ] })
      ]
    }
  ) });
};
const Home = () => {
  return /* @__PURE__ */ jsxs("div", {
    children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsxs("div", {
      className: "p-8",
      children: [/* @__PURE__ */ jsx("h1", {
        className: "text-4xl font-bold mb-8",
        children: "My 3D models"
      }), /* @__PURE__ */ jsx("section", {
        className: "space-y-12",
        children: /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-3xl font-bold mb-4",
            children: "Baseplate Model"
          }), /* @__PURE__ */ jsx(ThreeDViewer, {
            modelPath: "/models/baseplate.glb",
            altText: "Baseplate 3D Model",
            solidWorksPath: "/models/baseplate.SLDPRT",
            drawingPath: "/models/baseplate_drawing.SLDDRW"
          })]
        })
      }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("section", {
        className: "space-y-12",
        children: /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-3xl font-bold mb-4",
            children: "Stairs Model"
          }), /* @__PURE__ */ jsx(ThreeDViewer, {
            modelPath: "/models/Stairs/stairs.glb",
            altText: "3D Stairs Model",
            solidWorksPath: "/models/Stairs/Stairs.SLDPRT",
            drawingPath: "/models/Stairs/Stairs.SLDDRW"
          })]
        })
      }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("section", {
        className: "space-y-12",
        children: /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-3xl font-bold mb-4",
            children: "Dome Model"
          }), /* @__PURE__ */ jsx(ThreeDViewer, {
            modelPath: "/models/Dome/assem5.glb",
            altText: "3D Stairs Model",
            solidWorksPath: "/models/Stairs/Stairs.SLDPRT",
            drawingPath: "/models/Stairs/Stairs.SLDDRW"
          })]
        })
      }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("section", {
        className: "space-y-12",
        children: /* @__PURE__ */ jsxs("div", {
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-3xl font-bold mb-4",
            children: "Dome Model"
          }), /* @__PURE__ */ jsx(ThreeDViewer, {
            modelPath: "/models/Roller/roller.glb",
            altText: "3D Stairs Model",
            solidWorksPath: "/models/Stairs/Roller.SLDPRT",
            drawingPath: "/models/Stairs/Stairs.SLDDRW"
          })]
        })
      })]
    })]
  });
};
const home = withComponentProps(Home);
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-DJ0JN9J4.js", "imports": ["/assets/chunk-D52XG6IA-B2emolDZ.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-DYLZRxAF.js", "imports": ["/assets/chunk-D52XG6IA-B2emolDZ.js", "/assets/with-props-BXkCMI4n.js"], "css": [] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/home-BEFterRn.js", "imports": ["/assets/with-props-BXkCMI4n.js", "/assets/chunk-D52XG6IA-B2emolDZ.js"], "css": [] } }, "url": "/assets/manifest-ce12935b.js", "version": "ce12935b" };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_optimizeDeps": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  publicPath,
  routes
};
