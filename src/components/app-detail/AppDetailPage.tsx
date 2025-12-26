*** Begin Patch
*** Update File: src/components/app-detail/AppDetailPage.tsx
@@ @@
-                    className="w-full h-12 text-base font-bold shadow-lg shadow-text-primary/10 hover:-translate-y-0.5 !bg-black-solid !text-white"
+                    className="w-full h-12 text-base font-bold shadow-lg shadow-text-primary/10 hover:-translate-y-0.5 !bg-black-solid !text-white dark:!bg-white dark:!text-black"
@@ @@
-                    <span className="!text-white">Visit Website</span>
-                    <ExternalLink className="w-5 h-5 !text-white" />
+                    <span className="!text-white dark:!text-black">Visit Website</span>
+                    <ExternalLink className="w-5 h-5 !text-white dark:!text-black" />
*** Update File: src/components/app-detail/DesktopAppDetail.tsx
@@ @@
-                            className="w-full h-12 text-base font-bold shadow-lg shadow-text-primary/10 hover:-translate-y-0.5 !bg-black-solid !text-white"
+                            className="w-full h-12 text-base font-bold shadow-lg shadow-text-primary/10 hover:-translate-y-0.5 !bg-black-solid !text-white dark:!bg-white dark:!text-black"
@@ @@
-                                <span className="!text-white">Visit Website</span>
-                                <ExternalLink className="w-5 h-5 !text-white" />
+                                <span className="!text-white dark:!text-black">Visit Website</span>
+                                <ExternalLink className="w-5 h-5 !text-white dark:!text-black" />
*** End Patch
