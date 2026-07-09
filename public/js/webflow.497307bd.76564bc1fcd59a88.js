(() => {
    var t = {
            9904: function() {
                "use strict";
                !(function() {
                    if ("undefined" == typeof window) return;
                    let t = window.navigator.userAgent.match(/Edge\/(\d{2})\./),
                        e = !!t && parseInt(t[1], 10) >= 16;
                    if ("objectFit" in document.documentElement.style != !1 && !e) {
                        window.objectFitPolyfill = function() {
                            return !1;
                        };
                        return;
                    }
                    let i = function(t) {
                            let e = window.getComputedStyle(t, null),
                                i = e.getPropertyValue("position"),
                                r = e.getPropertyValue("overflow"),
                                a = e.getPropertyValue("display");
                            ((i && "static" !== i) || (t.style.position = "relative"),
                                "hidden" !== r && (t.style.overflow = "hidden"),
                                (a && "inline" !== a) || (t.style.display = "block"),
                                0 === t.clientHeight && (t.style.height = "100%"),
                                -1 === t.className.indexOf("object-fit-polyfill") && (t.className += " object-fit-polyfill"));
                        },
                        r = function(t) {
                            let e = window.getComputedStyle(t, null),
                                i = {
                                    "max-width": "none",
                                    "max-height": "none",
                                    "min-width": "0px",
                                    "min-height": "0px",
                                    top: "auto",
                                    right: "auto",
                                    bottom: "auto",
                                    left: "auto",
                                    "margin-top": "0px",
                                    "margin-right": "0px",
                                    "margin-bottom": "0px",
                                    "margin-left": "0px",
                                };
                            for (let r in i) e.getPropertyValue(r) !== i[r] && (t.style[r] = i[r]);
                        },
                        a = function(t) {
                            let e = t.parentNode;
                            (i(e),
                                r(t),
                                (t.style.position = "absolute"),
                                (t.style.height = "100%"),
                                (t.style.width = "auto"),
                                t.clientWidth > e.clientWidth ?
                                ((t.style.top = "0"),
                                    (t.style.marginTop = "0"),
                                    (t.style.left = "50%"),
                                    (t.style.marginLeft = -(t.clientWidth / 2) + "px")) :
                                ((t.style.width = "100%"),
                                    (t.style.height = "auto"),
                                    (t.style.left = "0"),
                                    (t.style.marginLeft = "0"),
                                    (t.style.top = "50%"),
                                    (t.style.marginTop = -(t.clientHeight / 2) + "px")));
                        },
                        n = function(t) {
                            if (void 0 === t || t instanceof Event) t = document.querySelectorAll("[data-object-fit]");
                            else if (t && t.nodeName) t = [t];
                            else if ("object" != typeof t || !t.length || !t[0].nodeName) return !1;
                            for (let i = 0; i < t.length; i++) {
                                if (!t[i].nodeName) continue;
                                let r = t[i].nodeName.toLowerCase();
                                if ("img" === r) {
                                    if (e) continue;
                                    t[i].complete ?
                                        a(t[i]) :
                                        t[i].addEventListener("load", function() {
                                            a(this);
                                        });
                                } else
                                    "video" === r ?
                                    t[i].readyState > 0 ?
                                    a(t[i]) :
                                    t[i].addEventListener("loadedmetadata", function() {
                                        a(this);
                                    }) :
                                    a(t[i]);
                            }
                            return !0;
                        };
                    ("loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : n(),
                        window.addEventListener("resize", n),
                        (window.objectFitPolyfill = n));
                })();
            },
            1724: function() {
                "use strict";

                function t(t) {
                    Webflow.env("design") ||
                        ($("video").each(function() {
                                t && $(this).prop("autoplay") ? this.play() : this.pause();
                            }),
                            $(".w-background-video--control").each(function() {
                                t ? i($(this)) : e($(this));
                            }));
                }

                function e(t) {
                    t.find("> span").each(function(t) {
                        $(this).prop("hidden", () => 0 === t);
                    });
                }

                function i(t) {
                    t.find("> span").each(function(t) {
                        $(this).prop("hidden", () => 1 === t);
                    });
                }
                "undefined" != typeof window &&
                    $(document).ready(() => {
                        let r = window.matchMedia("(prefers-reduced-motion: reduce)");
                        (r.addEventListener("change", (e) => {
                                t(!e.matches);
                            }),
                            r.matches && t(!1),
                            $("video:not([autoplay])").each(function() {
                                $(this)
                                    .parent()
                                    .find(".w-background-video--control")
                                    .each(function() {
                                        e($(this));
                                    });
                            }),
                            $(document).on("click", ".w-background-video--control", function(t) {
                                if (Webflow.env("design")) return;
                                let r = $(t.currentTarget),
                                    a = $(`video#${r.attr("aria-controls")}`).get(0);
                                if (a)
                                    if (a.paused) {
                                        let t = a.play();
                                        (i(r),
                                            t &&
                                            "function" == typeof t.catch &&
                                            t.catch(() => {
                                                e(r);
                                            }));
                                    } else(a.pause(), e(r));
                            }));
                    });
            },
            56: function(t, e, i) {
                (i(9461),
                    i(7624),
                    i(286),
                    i(8334),
                    i(2338),
                    i(3695),
                    i(322),
                    i(941),
                    i(5134),
                    i(1655),
                    i(2444),
                    i(3973),
                    i(9904),
                    i(1724),
                    i(9078),
                    i(5192));
            },
            5192: function() {
                function t() {
                    let t = Webflow.require("ix3");
                    t.ready().then(() => {
                        let e = t.getInstance();
                        e &&
                            (e.register(
                                    [{
                                            id: "i-99e8abdb",
                                            scope: {
                                                type: "component",
                                                componentId: "5a6382d2-e0d3-62a0-fb99-90b247678888"
                                            },
                                            triggers: [
                                                [
                                                    "wf:hover",
                                                    {
                                                        controlType: "standard"
                                                    },
                                                    ["wf:class", ["email-address"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                                [
                                                    "wf:hover",
                                                    {
                                                        control: "reverse",
                                                        controlType: "standard",
                                                        pluginConfig: {
                                                            type: "mouseleave",
                                                            hover: "each"
                                                        },
                                                    },
                                                    ["wf:class", ["email-address"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-79d6617f"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-a045c1e5",
                                            scope: {
                                                type: "component",
                                                componentId: "d0f53c86-b418-a526-4d6f-71e162cb1bb7"
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top top",
                                                            end: "bottom bottom",
                                                            scrub: 1,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["cta-sticky-wrap"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-26c0aee2"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-2e22a1fa",
                                            scope: {
                                                type: "component",
                                                componentId: "cb7828ae-a9c6-5bd0-42f2-dab3822909f5"
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top bottom",
                                                            end: "bottom top",
                                                            scrub: null,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["overlay-grid"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-f5d2f53e"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-1645bc24",
                                            scope: {
                                                type: "component",
                                                componentId: "8200a477-3767-8364-6113-c88aa46f9614"
                                            },
                                            triggers: [
                                                [
                                                    "wf:click",
                                                    {
                                                        control: "togglePlayReverse",
                                                        controlType: "standard"
                                                    },
                                                    ["wf:class", ["faq-card"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-6520c215"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-27ee1991",
                                            scope: {
                                                type: "site"
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top 80%",
                                                            end: "bottom 60%",
                                                            scrub: 0.8,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["section-header"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-3403ace2"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-9157ce14",
                                            scope: {
                                                type: "component",
                                                componentId: "8200a477-3767-8364-6113-c88aa46f9614"
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top bottom",
                                                            end: "bottom top",
                                                            scrub: null,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["faq-card"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-ec4a565c"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-f904c8a2",
                                            scope: {
                                                type: "component",
                                                componentId: "d0f53c86-b418-a526-4d6f-71e162cb1bb7"
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top top",
                                                            end: "bottom bottom",
                                                            scrub: 0.8,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["cta-sticky-wrap"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-1576a8ca"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-51339068",
                                            scope: {
                                                type: "component",
                                                componentId: "5a6382d2-e0d3-62a0-fb99-90b247678888"
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top bottom",
                                                            end: "bottom top",
                                                            scrub: null,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["footer-wrapper"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-f585deb3"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-36a564d2",
                                            scope: {
                                                type: "component",
                                                componentId: "65aca0e1-f951-823d-959b-848e3a7ce565"
                                            },
                                            triggers: [
                                                [
                                                    "wf:hover",
                                                    {
                                                        controlType: "standard"
                                                    },
                                                    ["wf:class", ["button"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                                [
                                                    "wf:hover",
                                                    {
                                                        control: "reverse",
                                                        controlType: "standard",
                                                        pluginConfig: {
                                                            type: "mouseleave",
                                                            hover: "each"
                                                        },
                                                    },
                                                    ["wf:class", ["button"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-f1614ec2"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-8033f2ff",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top top",
                                                            end: "bottom bottom",
                                                            scrub: 0.8,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["pin-height"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-8bb0ca7a"],
                                            conditionalPlayback: [{
                                                type: "breakpoint",
                                                behavior: "dont-animate",
                                                breakpoints: ["medium", "small", "tiny"]
                                            }, ],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-903b31f9",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:hover",
                                                    {
                                                        controlType: "standard"
                                                    },
                                                    ["wf:class", ["project-collection-wrapper"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                                [
                                                    "wf:hover",
                                                    {
                                                        control: "reverse",
                                                        controlType: "standard",
                                                        pluginConfig: {
                                                            type: "mouseleave",
                                                            hover: "each"
                                                        },
                                                    },
                                                    ["wf:class", ["project-collection-wrapper"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-2426882a"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-40fe9172",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                ["wf:load", {
                                                    controlType: "load"
                                                }]
                                            ],
                                            timelineIds: ["t-d025ff5a"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-f0995447",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                ["wf:load", {
                                                    controlType: "load"
                                                }]
                                            ],
                                            timelineIds: ["t-3ba51af2"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-57849378",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                ["wf:load", {
                                                    controlType: "load"
                                                }]
                                            ],
                                            timelineIds: ["t-1414e56d"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-a5f1c588",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top top",
                                                            end: "bottom bottom",
                                                            scrub: 0.8,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["testimonial-sticky-wrap"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-d9f49b08"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-f90887e4",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top bottom",
                                                            end: "20% top",
                                                            scrub: 0.8,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["service-wrapper"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-75347df6"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-c576384b",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                ["wf:load", {
                                                    controlType: "load"
                                                }]
                                            ],
                                            timelineIds: ["t-fc3ddd89"],
                                            conditionalPlayback: [{
                                                type: "breakpoint",
                                                behavior: "dont-animate",
                                                breakpoints: ["main"]
                                            }],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-774193ec",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:hover",
                                                    {
                                                        controlType: "standard"
                                                    },
                                                    ["wf:class", [], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                                [
                                                    "wf:hover",
                                                    {
                                                        control: "reverse",
                                                        controlType: "standard",
                                                        pluginConfig: {
                                                            type: "mouseleave",
                                                            hover: "each"
                                                        },
                                                    },
                                                    ["wf:class", [], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-72477a3b"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-d34b7ad8",
                                            scope: {
                                                type: "pages",
                                                value: ["6a351d55090fb3eb90d329a2", "6a2fc5386bf7f404b664d7bf", "6a2ede0dd01527a201b478d1"],
                                            },
                                            triggers: [
                                                [
                                                    "wf:hover",
                                                    {
                                                        controlType: "standard"
                                                    },
                                                    ["wf:class", ["services-card"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                                [
                                                    "wf:hover",
                                                    {
                                                        control: "reverse",
                                                        controlType: "standard",
                                                        pluginConfig: {
                                                            type: "mouseleave",
                                                            hover: "each"
                                                        },
                                                    },
                                                    ["wf:class", ["services-card"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-b11b2816"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-3f710996",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top bottom",
                                                            end: "bottom 50%",
                                                            scrub: 0.8,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["rebuild-text"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-3c9627b7"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-88615d95",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top bottom",
                                                            end: "bottom top",
                                                            scrub: null,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["project-collection-wrapper"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-242e6d76"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-a87f6d43",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top 90%",
                                                            end: "bottom top",
                                                            scrub: null,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["team-grid"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-26ebcba6"],
                                            conditionalPlayback: [{
                                                type: "breakpoint",
                                                behavior: "dont-animate",
                                                breakpoints: ["tiny"]
                                            }],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-c86357d3",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top top",
                                                            end: "bottom bottom",
                                                            scrub: 0.8,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", [], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-9e982f41"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-59fa11fe",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top bottom",
                                                            end: "bottom top",
                                                            scrub: null,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["choose-content-wrapper"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-183a027d"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-26b3efc4",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top bottom",
                                                            end: "bottom top",
                                                            scrub: null,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["section-p"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-b2e91581"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-8fa0846d",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top bottom",
                                                            end: "bottom top",
                                                            scrub: null,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["section-button-wrap"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-a2af937e"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-c3152149",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top bottom",
                                                            end: "bottom top",
                                                            scrub: null,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["pricing-card-wrapper"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-8de925a4"],
                                            conditionalPlayback: [{
                                                type: "breakpoint",
                                                behavior: "dont-animate",
                                                breakpoints: ["tiny"]
                                            }],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-6a2f57d1",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top bottom",
                                                            end: "bottom top",
                                                            scrub: 0.8,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["pricing-card"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-90c970b7"],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-61c1ebde",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top bottom",
                                                            end: "bottom top",
                                                            scrub: null,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["pricing-card"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-1f219617"],
                                            conditionalPlayback: [{
                                                type: "breakpoint",
                                                behavior: "dont-animate",
                                                breakpoints: ["small", "medium", "main"]
                                            }, ],
                                            deleted: !1,
                                        },
                                        {
                                            id: "i-2293076f",
                                            scope: {
                                                type: "pages",
                                                value: ["6a2ede0dd01527a201b478d1"]
                                            },
                                            triggers: [
                                                [
                                                    "wf:scroll",
                                                    {
                                                        controlType: "scroll",
                                                        scrollTriggerConfig: {
                                                            clamp: !0,
                                                            start: "top bottom",
                                                            end: "bottom top",
                                                            scrub: null,
                                                            enter: "play",
                                                            leave: "none",
                                                            enterBack: "none",
                                                            leaveBack: "none",
                                                        },
                                                    },
                                                    ["wf:class", ["team-card"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                            ],
                                            timelineIds: ["t-61c5b471"],
                                            conditionalPlayback: [{
                                                type: "breakpoint",
                                                behavior: "dont-animate",
                                                breakpoints: ["small", "main", "medium"]
                                            }, ],
                                            deleted: !1,
                                        },
                                    ],
                                    [{
                                            id: "t-79d6617f",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-c0a9eb7b",
                                                targets: [
                                                    ["wf:trigger-only", "", {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }]
                                                ],
                                                timing: {
                                                    duration: 0.3,
                                                    stagger: {
                                                        amount: 0.5
                                                    },
                                                    ease: 16
                                                },
                                                tt: 2,
                                                properties: {
                                                    "wf:transform": {},
                                                    "wf:style": {
                                                        color: ["var(--_color---white)", "var(--_color---primary-color)"]
                                                    },
                                                },
                                                splitText: {
                                                    type: "chars",
                                                    mask: "chars"
                                                },
                                            }, ],
                                        },
                                        {
                                            id: "t-26c0aee2",
                                            deleted: !1,
                                            actions: [{
                                                    id: "ta-c842c7d1",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["cta-circle-large"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        duration: 0.8,
                                                        position: 0,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [0, 1]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-5c725a49",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["cta-content-wrap"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0.8,
                                                        stagger: {
                                                            amount: 0.5
                                                        },
                                                        ease: 5
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["110%", "0%"]
                                                        }
                                                    },
                                                    splitText: {
                                                        type: "lines",
                                                        mask: "lines"
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            id: "t-f5d2f53e",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-ff97e7f5",
                                                targets: [
                                                    [
                                                        "wf:class",
                                                        ["col"],
                                                        {
                                                            relationship: "within",
                                                            filterBy: ["wf:trigger-only", ""],
                                                            firstMatchOnly: !1
                                                        },
                                                    ],
                                                ],
                                                timing: {
                                                    duration: 1,
                                                    stagger: {
                                                        amount: 1
                                                    },
                                                    ease: 5
                                                },
                                                tt: 2,
                                                properties: {
                                                    "wf:transform": {
                                                        height: ["100%", "0%"],
                                                        width: ["100%", "100%"]
                                                    }
                                                },
                                            }, ],
                                        },
                                        {
                                            id: "t-6520c215",
                                            deleted: !1,
                                            actions: [{
                                                    id: "ta-2841407d",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["faq-p-wrap"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        ease: 6
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            height: ["0px", "auto"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-811646ba",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["faq-arrow"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0,
                                                        ease: 6
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            rotation: ["0deg", "135deg"]
                                                        }
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            id: "t-3403ace2",
                                            deleted: !1,
                                            actions: [{
                                                    id: "ta-ee1c39dc",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["section-heading"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        stagger: {
                                                            amount: 1
                                                        },
                                                        ease: 5
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            opacity: ["0%", "100%"],
                                                            y: ["100%", "0%"]
                                                        }
                                                    },
                                                    splitText: {
                                                        type: "chars",
                                                        mask: "chars"
                                                    },
                                                },
                                                {
                                                    id: "ta-1e172e1c",
                                                    targets: [
                                                        ["wf:class", ["section-counter-text"], {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        }]
                                                    ],
                                                    timing: {
                                                        position: 0,
                                                        ease: 5
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            opacity: ["0%", "100%"],
                                                            y: ["100%", "0%"]
                                                        }
                                                    },
                                                    splitText: {
                                                        type: "lines",
                                                        mask: "lines"
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            id: "t-ec4a565c",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-8f8fa87f",
                                                targets: [
                                                    ["wf:trigger-only", "", {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }]
                                                ],
                                                timing: {
                                                    ease: 5
                                                },
                                                tt: 1,
                                                properties: {
                                                    "wf:transform": {
                                                        opacity: ["0%", null],
                                                        yPercent: [100, null]
                                                    }
                                                },
                                            }, ],
                                        },
                                        {
                                            id: "t-1576a8ca",
                                            deleted: !1,
                                            actions: [{
                                                    id: "ta-e912d495",
                                                    targets: [
                                                        ["wf:class", ["cta-circle-large"], {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        }]
                                                    ],
                                                    timing: {
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            rotation: ["-360deg", "0deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-fec86704",
                                                    targets: [
                                                        ["wf:class", ["cta-card"], {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        }]
                                                    ],
                                                    timing: {
                                                        position: 0,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            rotation: ["0deg", "-360deg"]
                                                        }
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            id: "t-f585deb3",
                                            deleted: !1,
                                            actions: [{
                                                    id: "ta-973c54c5",
                                                    targets: [
                                                        ["wf:class", ["footer-nav-wrapper"], {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        }]
                                                    ],
                                                    timing: {
                                                        ease: 2
                                                    },
                                                    tt: 1,
                                                    properties: {
                                                        "wf:transform": {
                                                            opacity: ["0%", null],
                                                            yPercent: [100, null]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-211a29bd",
                                                    targets: [
                                                        ["wf:class", ["email-address"], {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        }]
                                                    ],
                                                    timing: {
                                                        position: 0.26,
                                                        stagger: {
                                                            amount: 0.5,
                                                            from: "center"
                                                        },
                                                        ease: 5
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            opacity: ["0%", "100%"],
                                                            y: ["100px", "0%"]
                                                        }
                                                    },
                                                    splitText: {
                                                        type: "chars",
                                                        mask: "chars"
                                                    },
                                                },
                                                {
                                                    id: "ta-3684df80",
                                                    targets: [
                                                        ["wf:class", ["footer-social-block"], {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        }]
                                                    ],
                                                    timing: {
                                                        position: 0.76,
                                                        ease: 5
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            opacity: ["0%", "100%"],
                                                            y: ["100%", "0%"]
                                                        }
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            id: "t-f1614ec2",
                                            deleted: !1,
                                            actions: [{
                                                    id: "ta-509d90d9",
                                                    targets: [
                                                        ["wf:class", ["button-text-wrapper"], {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        }]
                                                    ],
                                                    timing: {
                                                        duration: 0.35,
                                                        position: 0,
                                                        ease: 6
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {},
                                                        "wf:style": {
                                                            borderColor: ["var(--_color---blastic-sea)", "var(--_color---primary-color)"]
                                                        },
                                                    },
                                                },
                                                {
                                                    id: "ta-fec4fff1",
                                                    targets: [
                                                        ["wf:class", ["project-arrow-pill"], {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        }]
                                                    ],
                                                    timing: {
                                                        duration: 0.35,
                                                        ease: 6
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            rotation: ["0deg", "-45deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-f98a4717",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["button-icon"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        duration: 0.35,
                                                        position: 0.28,
                                                        ease: 6
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            x: ["0%", "100%"]
                                                        }
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            id: "t-8bb0ca7a",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-bed7e779",
                                                targets: [
                                                    [
                                                        "wf:inst",
                                                        ["6a2ede0dd01527a201b478d1", "833d6c3e-f5a5-241d-0496-aa5bfb8fc895"],
                                                        {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        },
                                                    ],
                                                ],
                                                timing: {
                                                    ease: 0
                                                },
                                                tt: 2,
                                                properties: {
                                                    "wf:transform": {
                                                        x: ["0%", "-95%"],
                                                        y: ["0%", "70%"]
                                                    }
                                                },
                                            }, ],
                                        },
                                        {
                                            id: "t-2426882a",
                                            deleted: !1,
                                            actions: [{
                                                    id: "ta-f073a6d0",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["project-image-wrapper"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        ease: 6
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            width: ["0%", "25%"],
                                                            height: ["0%", "auto"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-7fed32ee",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["project-right"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0,
                                                        ease: 6
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            opacity: ["40%", "100%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-b3ab2b1e",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["project-line-wrap"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        duration: 0.8,
                                                        position: 0,
                                                        ease: 6
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            width: ["0%", "100%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-d9c4a1ec",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["project-icon-wrapper"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0.13,
                                                        ease: 6
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [0, 1]
                                                        }
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            id: "t-d025ff5a",
                                            deleted: !1,
                                            actions: [{
                                                    id: "ta-7c5133a7",
                                                    targets: [
                                                        ["wf:class", ["hero-item-wrapper"], {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        }]
                                                    ],
                                                    timing: {
                                                        duration: 0.7,
                                                        stagger: {
                                                            amount: 0.6
                                                        },
                                                        ease: 5
                                                    },
                                                    tt: 1,
                                                    properties: {
                                                        "wf:transform": {
                                                            opacity: ["0%", null],
                                                            yPercent: [100, null]
                                                        }
                                                    },
                                                    splitText: {
                                                        type: "lines",
                                                        mask: "lines"
                                                    },
                                                },
                                                {
                                                    id: "ta-82103609",
                                                    targets: [
                                                        ["wf:class", ["hero-p"], {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        }]
                                                    ],
                                                    timing: {
                                                        position: 0.63,
                                                        stagger: {
                                                            amount: 0.7
                                                        },
                                                        ease: 2
                                                    },
                                                    tt: 1,
                                                    properties: {
                                                        "wf:transform": {
                                                            opacity: ["0%", null],
                                                            yPercent: [100, null]
                                                        }
                                                    },
                                                    splitText: {
                                                        type: "lines",
                                                        mask: "lines"
                                                    },
                                                },
                                                {
                                                    id: "ta-53fb6fbf",
                                                    targets: [
                                                        ["wf:class", ["hero-heading"], {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        }]
                                                    ],
                                                    timing: {
                                                        position: 1.04,
                                                        stagger: {
                                                            amount: 1
                                                        },
                                                        ease: 8
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["100%", "0%"]
                                                        }
                                                    },
                                                    splitText: {
                                                        type: "chars",
                                                        mask: "chars"
                                                    },
                                                },
                                                {
                                                    id: "ta-310f961d",
                                                    targets: [
                                                        ["wf:class", ["heading-icon-wrapper"], {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        }]
                                                    ],
                                                    timing: {
                                                        position: 2,
                                                        ease: 5
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [0, 1]
                                                        }
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            id: "t-3ba51af2",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-c345e97c",
                                                targets: [
                                                    [
                                                        "wf:class",
                                                        ["gallary-image-block.bottom-to-top"],
                                                        {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        },
                                                    ],
                                                ],
                                                timing: {
                                                    duration: 12,
                                                    ease: 0
                                                },
                                                tt: 2,
                                                properties: {
                                                    "wf:transform": {
                                                        y: ["0%", "-100%"]
                                                    }
                                                },
                                            }, ],
                                            settings: {
                                                repeat: -1,
                                                yoyo: !1
                                            },
                                        },
                                        {
                                            id: "t-1414e56d",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-f54a6b6e",
                                                targets: [
                                                    [
                                                        "wf:class",
                                                        ["gallary-image-block.top-to-bottom"],
                                                        {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        },
                                                    ],
                                                ],
                                                timing: {
                                                    duration: 12,
                                                    ease: 0
                                                },
                                                tt: 2,
                                                properties: {
                                                    "wf:transform": {
                                                        y: ["-100%", "0%"]
                                                    }
                                                },
                                            }, ],
                                            settings: {
                                                repeat: -1,
                                                yoyo: !1
                                            },
                                        },
                                        {
                                            id: "t-d9f49b08",
                                            deleted: !1,
                                            actions: [{
                                                    id: "ta-634665f7",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-color-circle._01"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [1, 0.8]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-2263308b",
                                                    targets: [
                                                        ["wf:class", ["color-circle._01"], {
                                                            relationship: "none",
                                                            firstMatchOnly: !1
                                                        }]
                                                    ],
                                                    timing: {
                                                        position: 0,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            width: ["100%", "0%"],
                                                            height: ["100%", "0%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-2f3d36c3",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-color-circle._02"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [0.8, 1]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-92d29a60",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["color-circle._02"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            width: ["0%", "100%"],
                                                            height: ["0%", "100%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-93791a0e",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-info-card._01"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0,
                                                        stagger: {
                                                            amount: 0.2
                                                        },
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["0%", "-120%"],
                                                            rotationX: ["0deg", "90deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-a5bc4259",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["review-right-text._01"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["0%", "-150%"],
                                                            rotationX: ["0deg", "-90deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-4a1c0d30",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["review-right-text._02"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            rotationX: ["90deg", "0deg"],
                                                            y: ["150%", "0%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-27730c25",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-info-card._02"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0,
                                                        stagger: {
                                                            amount: 0.2
                                                        },
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["120%", "0%"],
                                                            rotationX: ["-90deg", "0deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-1e79ab12",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-color-circle._02"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0.65,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [1, 0.8]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-291c4241",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["color-circle._02"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0.65,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            width: ["100%", "0%"],
                                                            height: ["100%", "0%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-f53435e0",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-info-card._02"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0.65,
                                                        stagger: {
                                                            amount: 0.2
                                                        },
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["0%", "-120%"],
                                                            rotationX: ["0deg", "90deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-2195ea69",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["review-right-text._02"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0.65,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            rotationX: ["0deg", "-90deg"],
                                                            y: ["0%", "-150%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-ac2d1a4d",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-color-circle._03"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0.65,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [0.8, 1]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-cf5f9817",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["color-circle._03"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0.65,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            width: ["0%", "100%"],
                                                            height: ["0%", "100%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-200a3a06",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-info-card._03"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0.65,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["120%", "0%"],
                                                            rotationX: ["-90deg", "0deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-2500a91a",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["review-right-text._03"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0.65,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["150%", "0%"],
                                                            rotationX: ["-90deg", 0]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-81db6480",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-color-circle._03"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.3,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [1, 0.8]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-f03f454c",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["color-circle._03"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.3,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            width: ["100%", "0%"],
                                                            height: ["100%", "0%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-4ff45489",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-info-card._03"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.3,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["0%", "-120%"],
                                                            rotationX: ["0deg", "90deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-672f7d8d",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["review-right-text._03"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.3,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["0%", "-150%"],
                                                            rotationX: ["0deg", "90deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-1320d0ff",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-color-circle._04"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.3,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [0.8, 1]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-bd1a6309",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["color-circle._04"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.3,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            width: ["0%", "100%"],
                                                            height: ["0%", "100%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-53946cb0",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-info-card._04"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.3,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["150%", "0%"],
                                                            rotationX: ["-90deg", "0deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-1fb49df8",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["review-right-text._04"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.3,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["150%", "0%"],
                                                            rotationX: ["-90deg", "0deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-7e369b3f",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-color-circle._04"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.95,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [1, 0.8]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-3f7b4e70",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["color-circle._04"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.95,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            width: ["100%", "0%"],
                                                            height: ["100%", "0%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-cb53c5c0",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-info-card._04"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.95,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["0%", "-150%"],
                                                            rotationX: ["0deg", "90deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-e7974c04",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["review-right-text._04"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.95,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["0%", "-150%"],
                                                            rotationX: ["0deg", "-90deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-121c5a5e",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-color-circle._05"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.95,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [0.8, 1]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-18543db8",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["color-circle._05"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.95,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            width: ["0%", "100%"],
                                                            height: ["0%", "100%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-a66d9e19",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["testimonial-info-card._05"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.95,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["150%", "0%"],
                                                            rotationX: ["-90deg", "0deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-2d2efe29",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["review-right-text._05"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 1.95,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            y: ["150%", "0%"],
                                                            rotationX: ["-90deg", "0deg"]
                                                        }
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            id: "t-75347df6",
                                            deleted: !1,
                                            actions: [{
                                                    id: "ta-5e0e194f",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["service-header-left"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            x: ["0%", "-80%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-171832c5",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["service-header-right"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            x: ["0%", "80%"]
                                                        }
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            id: "t-fc3ddd89",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-135c87e0",
                                                targets: [
                                                    ["wf:class", ["process-card-container"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }],
                                                ],
                                                timing: {
                                                    duration: 20,
                                                    ease: 0
                                                },
                                                tt: 2,
                                                properties: {
                                                    "wf:transform": {
                                                        x: ["0%", "-100%"]
                                                    }
                                                },
                                            }, ],
                                            settings: {
                                                repeat: -1,
                                                yoyo: !1
                                            },
                                        },
                                        {
                                            id: "t-72477a3b",
                                            deleted: !1,
                                            actions: [{
                                                    id: "ta-eb8187a7",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            [],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        ease: 6
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [1, 1.15]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-41bc98e9",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["project-arrow-wrap"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0.06,
                                                        ease: 6
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [0, 1],
                                                            rotation: ["0deg", "-45deg"]
                                                        }
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            id: "t-b11b2816",
                                            deleted: !1,
                                            actions: [{
                                                    id: "ta-b502da93",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["service-image"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        ease: 6
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [1, 1.2],
                                                            rotation: ["0deg", "5deg"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-feb2030c",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["project-arrow-wrap"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        position: 0,
                                                        ease: 6
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            scale: [0, 1],
                                                            rotation: ["0deg", "-45deg"]
                                                        }
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            id: "t-3c9627b7",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-67e8d93f",
                                                targets: [
                                                    ["wf:trigger-only", "", {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }]
                                                ],
                                                timing: {
                                                    stagger: {
                                                        each: 0.05
                                                    },
                                                    ease: 0
                                                },
                                                tt: 2,
                                                properties: {
                                                    "wf:transform": {
                                                        opacity: ["30%", "100%"]
                                                    }
                                                },
                                                splitText: {
                                                    type: "chars",
                                                    mask: "chars"
                                                },
                                            }, ],
                                        },
                                        {
                                            id: "t-242e6d76",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-be02d9c1",
                                                targets: [
                                                    ["wf:trigger-only", "", {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }]
                                                ],
                                                timing: {
                                                    ease: 5
                                                },
                                                tt: 1,
                                                properties: {
                                                    "wf:transform": {
                                                        opacity: ["0%", null],
                                                        yPercent: [100, null]
                                                    }
                                                },
                                            }, ],
                                        },
                                        {
                                            id: "t-26ebcba6",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-c304d6fc",
                                                targets: [
                                                    ["wf:class", ["team-card"], {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }]
                                                ],
                                                timing: {
                                                    stagger: {
                                                        amount: 0.5
                                                    },
                                                    ease: 5
                                                },
                                                tt: 1,
                                                properties: {
                                                    "wf:transform": {
                                                        opacity: ["0%", null],
                                                        yPercent: ["80%", null]
                                                    }
                                                },
                                            }, ],
                                        },
                                        {
                                            id: "t-9e982f41",
                                            deleted: !1,
                                            actions: [{
                                                    id: "ta-173fbb0c",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            [],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        duration: 0.25,
                                                        position: 0,
                                                        stagger: {
                                                            each: 0.05
                                                        },
                                                        ease: 6
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            opacity: ["100%", "0%"],
                                                            y: ["0%", "100%"]
                                                        }
                                                    },
                                                    splitText: {
                                                        type: "chars",
                                                        mask: "chars"
                                                    },
                                                },
                                                {
                                                    id: "ta-acd011c4",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            [],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        duration: 0.7,
                                                        position: 0.5,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            height: ["100%", "0%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-e63b301e",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            [],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        duration: 0.7,
                                                        position: 0.5,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            height: ["100%", "0%"]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-5acd14e9",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            ["play-pause-button"],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        duration: 0.53,
                                                        position: 0.67,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            opacity: ["0%", "100%"],
                                                            scale: [0.5, 1]
                                                        }
                                                    },
                                                },
                                                {
                                                    id: "ta-f1d9a00e",
                                                    targets: [
                                                        [
                                                            "wf:class",
                                                            [],
                                                            {
                                                                relationship: "within",
                                                                filterBy: ["wf:trigger-only", ""],
                                                                firstMatchOnly: !1
                                                            },
                                                        ],
                                                    ],
                                                    timing: {
                                                        duration: 0.53,
                                                        position: 0.67,
                                                        ease: 0
                                                    },
                                                    tt: 2,
                                                    properties: {
                                                        "wf:transform": {
                                                            opacity: ["0%", "100%"],
                                                            scale: [0.5, 1],
                                                            rotation: ["0deg", "180deg"]
                                                        },
                                                    },
                                                },
                                            ],
                                        },
                                        {
                                            id: "t-183a027d",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-41568663",
                                                targets: [
                                                    ["wf:trigger-only", "", {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }]
                                                ],
                                                timing: {
                                                    stagger: {
                                                        amount: 0.4
                                                    },
                                                    ease: 2
                                                },
                                                tt: 1,
                                                properties: {
                                                    "wf:transform": {
                                                        opacity: ["0%", null],
                                                        yPercent: [100, null]
                                                    }
                                                },
                                                splitText: {
                                                    type: "lines",
                                                    mask: "lines"
                                                },
                                            }, ],
                                        },
                                        {
                                            id: "t-b2e91581",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-e2203f44",
                                                targets: [
                                                    ["wf:trigger-only", "", {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }]
                                                ],
                                                timing: {
                                                    ease: 2
                                                },
                                                tt: 1,
                                                properties: {
                                                    "wf:transform": {
                                                        opacity: ["0%", null],
                                                        yPercent: [100, null]
                                                    }
                                                },
                                            }, ],
                                        },
                                        {
                                            id: "t-a2af937e",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-cad1bf01",
                                                targets: [
                                                    ["wf:trigger-only", "", {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }]
                                                ],
                                                timing: {
                                                    ease: 2
                                                },
                                                tt: 1,
                                                properties: {
                                                    "wf:transform": {
                                                        opacity: ["0%", null],
                                                        yPercent: [100, null]
                                                    }
                                                },
                                            }, ],
                                        },
                                        {
                                            id: "t-8de925a4",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-568ce673",
                                                targets: [
                                                    [
                                                        "wf:class",
                                                        ["pricing-card"],
                                                        {
                                                            relationship: "within",
                                                            filterBy: ["wf:trigger-only", ""],
                                                            firstMatchOnly: !1
                                                        },
                                                    ],
                                                ],
                                                timing: {
                                                    duration: 0.8,
                                                    stagger: {
                                                        amount: 0.3
                                                    },
                                                    ease: 6
                                                },
                                                tt: 1,
                                                properties: {
                                                    "wf:transform": {
                                                        opacity: ["0%", null],
                                                        yPercent: ["40%", null]
                                                    }
                                                },
                                            }, ],
                                        },
                                        {
                                            id: "t-90c970b7",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-1437057d",
                                                targets: [
                                                    ["wf:trigger-only", "", {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }]
                                                ],
                                                timing: {
                                                    ease: 0
                                                },
                                                properties: {
                                                    "wf:transform": {}
                                                },
                                            }, ],
                                        },
                                        {
                                            id: "t-1f219617",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-86c11acd",
                                                targets: [
                                                    ["wf:trigger-only", "", {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }]
                                                ],
                                                timing: {
                                                    ease: 5
                                                },
                                                tt: 1,
                                                properties: {
                                                    "wf:transform": {
                                                        opacity: ["0%", null],
                                                        yPercent: ["30%", null]
                                                    }
                                                },
                                            }, ],
                                        },
                                        {
                                            id: "t-61c5b471",
                                            deleted: !1,
                                            actions: [{
                                                id: "ta-e7157df7",
                                                targets: [
                                                    ["wf:trigger-only", "", {
                                                        relationship: "none",
                                                        firstMatchOnly: !1
                                                    }]
                                                ],
                                                timing: {
                                                    duration: 0.6,
                                                    ease: 5
                                                },
                                                tt: 1,
                                                properties: {
                                                    "wf:transform": {
                                                        opacity: ["0%", null],
                                                        yPercent: ["60%", null]
                                                    }
                                                },
                                            }, ],
                                        },
                                    ]
                                ),
                                window.dispatchEvent(new CustomEvent("__wf_ix3_ready")),
                                document.documentElement.classList.add("w-mod-ix3"));
                    });
                }
                (Webflow.require("ix2").init({
                        events: {
                            "e-28": {
                                id: "e-28",
                                name: "",
                                animationType: "custom",
                                eventTypeId: "NAVBAR_OPEN",
                                action: {
                                    id: "",
                                    actionTypeId: "GENERAL_START_ACTION",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        actionListId: "a",
                                        affectedElements: {},
                                        playInReverse: !1,
                                        autoStopEventId: "e-29",
                                    },
                                },
                                mediaQueries: ["main", "medium", "small", "tiny"],
                                target: {
                                    appliesTo: "ELEMENT",
                                    styleBlockIds: [],
                                    id: "dd40cc7b-b405-34ca-5e01-65cea6715166"
                                },
                                targets: [],
                                config: {
                                    loop: !1,
                                    playInReverse: !1,
                                    scrollOffsetValue: null,
                                    scrollOffsetUnit: null,
                                    delay: null,
                                    direction: null,
                                    effectIn: null,
                                },
                                createdOn: 0x19ee9268fba,
                            },
                            "e-29": {
                                id: "e-29",
                                name: "",
                                animationType: "custom",
                                eventTypeId: "NAVBAR_CLOSE",
                                action: {
                                    id: "",
                                    actionTypeId: "GENERAL_START_ACTION",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 0,
                                        actionListId: "a-2",
                                        affectedElements: {},
                                        playInReverse: !1,
                                        autoStopEventId: "e-28",
                                    },
                                },
                                mediaQueries: ["main", "medium", "small", "tiny"],
                                target: {
                                    appliesTo: "ELEMENT",
                                    styleBlockIds: [],
                                    id: "dd40cc7b-b405-34ca-5e01-65cea6715166"
                                },
                                targets: [],
                                config: {
                                    loop: !1,
                                    playInReverse: !1,
                                    scrollOffsetValue: null,
                                    scrollOffsetUnit: null,
                                    delay: null,
                                    direction: null,
                                    effectIn: null,
                                },
                                createdOn: 0x19ee9268fba,
                            },
                        },
                        actionLists: {
                            a: {
                                id: "a",
                                title: "Nav Open",
                                actionItemGroups: [{
                                        actionItems: [{
                                            id: "a-n",
                                            actionTypeId: "PLUGIN_LOTTIE",
                                            config: {
                                                delay: 0,
                                                easing: "",
                                                duration: 500,
                                                target: {
                                                    useEventTarget: "CHILDREN",
                                                    selector: ".btn_close",
                                                    selectorGuids: ["b108b5ec-6cce-d7b2-2646-0ea4003a14ad"],
                                                },
                                                value: 0,
                                            },
                                        }, ],
                                    },
                                    {
                                        actionItems: [{
                                            id: "a-n-2",
                                            actionTypeId: "PLUGIN_LOTTIE",
                                            config: {
                                                delay: 0,
                                                easing: "ease",
                                                duration: 500,
                                                target: {
                                                    useEventTarget: "CHILDREN",
                                                    selector: ".btn_close",
                                                    selectorGuids: ["b108b5ec-6cce-d7b2-2646-0ea4003a14ad"],
                                                },
                                                value: 100,
                                            },
                                        }, ],
                                    },
                                ],
                                createdOn: 0x19ee926fd5f,
                                useFirstGroupAsInitialState: !0,
                            },
                            "a-2": {
                                id: "a-2",
                                title: "Nav Close",
                                actionItemGroups: [{
                                    actionItems: [{
                                        id: "a-2-n",
                                        actionTypeId: "PLUGIN_LOTTIE",
                                        config: {
                                            delay: 0,
                                            easing: "ease",
                                            duration: 500,
                                            target: {
                                                useEventTarget: "CHILDREN",
                                                selector: ".btn_close",
                                                selectorGuids: ["b108b5ec-6cce-d7b2-2646-0ea4003a14ad"],
                                            },
                                            value: 0,
                                        },
                                    }, ],
                                }, ],
                                createdOn: 0x19ee926fd5f,
                                useFirstGroupAsInitialState: !1,
                            },
                        },
                        site: {
                            mediaQueries: [{
                                    key: "main",
                                    min: 992,
                                    max: 1e4
                                },
                                {
                                    key: "medium",
                                    min: 768,
                                    max: 991
                                },
                                {
                                    key: "small",
                                    min: 480,
                                    max: 767
                                },
                                {
                                    key: "tiny",
                                    min: 0,
                                    max: 479
                                },
                            ],
                        },
                    }),
                    "complete" === document.readyState ?
                    t() :
                    document.addEventListener("readystatechange", () => {
                        "complete" === document.readyState && t();
                    }));
            },
        },
        e = {};

    function i(r) {
        var a = e[r];
        if (void 0 !== a) return a.exports;
        var n = (e[r] = {
            id: r,
            loaded: !1,
            exports: {}
        });
        return (t[r].call(n.exports, n, n.exports, i), (n.loaded = !0), n.exports);
    }
    ((i.m = t),
        (i.d = (t, e) => {
            for (var r in e) i.o(e, r) && !i.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            });
        }),
        (i.hmd = (t) => (
            (t = Object.create(t)).children || (t.children = []),
            Object.defineProperty(t, "exports", {
                enumerable: !0,
                set: () => {
                    throw Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id);
                },
            }),
            t
        )),
        (i.g = (() => {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || Function("return this")();
            } catch (t) {
                if ("object" == typeof window) return window;
            }
        })()),
        (i.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
        (i.r = (t) => {
            ("undefined" != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module"
                }),
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }));
        }),
        (i.nmd = (t) => ((t.paths = []), t.children || (t.children = []), t)),
        (() => {
            var t = [];
            i.O = (e, r, a, n) => {
                if (r) {
                    n = n || 0;
                    for (var o = t.length; o > 0 && t[o - 1][2] > n; o--) t[o] = t[o - 1];
                    t[o] = [r, a, n];
                    return;
                }
                for (var s = 1 / 0, o = 0; o < t.length; o++) {
                    for (var [r, a, n] = t[o], l = !0, c = 0; c < r.length; c++)
                        (!1 & n || s >= n) && Object.keys(i.O).every((t) => i.O[t](r[c])) ?
                        r.splice(c--, 1) :
                        ((l = !1), n < s && (s = n));
                    if (l) {
                        t.splice(o--, 1);
                        var d = a();
                        void 0 !== d && (e = d);
                    }
                }
                return e;
            };
        })(),
        (i.rv = () => "1.3.9"),
        (() => {
            var t = {
                603: 0
            };
            i.O.j = (e) => 0 === t[e];
            var e = (e, r) => {
                    var a,
                        n,
                        [o, s, l] = r,
                        c = 0;
                    if (o.some((e) => 0 !== t[e])) {
                        for (a in s) i.o(s, a) && (i.m[a] = s[a]);
                        if (l) var d = l(i);
                    }
                    for (e && e(r); c < o.length; c++)((n = o[c]), i.o(t, n) && t[n] && t[n][0](), (t[n] = 0));
                    return i.O(d);
                },
                r = (self.webpackChunk = self.webpackChunk || []);
            (r.forEach(e.bind(null, 0)), (r.push = e.bind(null, r.push.bind(r))));
        })(),
        (i.ruid = "bundler=rspack@1.3.9"));
    var r = i.O(void 0, ["753", "54", "471"], function() {
        return i(56);
    });
    r = i.O(r);
})();