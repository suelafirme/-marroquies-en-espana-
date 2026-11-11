# Marroquíes en España — Premium V6 🇲🇦🇪🇸

المشروع ديال المجتمع المغربي فإسبانيا، البريفيو والتطوير ديالو فهاد المستودع.

## الروابط

- GitHub Pages بعد التفعيل: https://suelafirme.github.io/-marroquies-en-espana-/
- البريفيو الافتراضي **محلي وتجريبي**: منشورات وأصدقاء افتراضيين فقط.
- باش تختبر Supabase الحقيقي: زيد `?mode=live` للرابط، ولكن خاص الاختبارات والحماية قبل النشر العام.

## باش تفعّل البريفيو

Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save.

إذا ما بانش Pages، شوف Settings → Pages وتأكد باللي الحساب عندو الصلاحيات.

## APK تجريبي

فـGitHub: Actions → Build Android debug APK → Run workflow (أو كيتبنى مع دفع تغييرات على main).
منين يسالي ويدوز بنجاح، دخل للـrun وحمّل Artifact فيه `app-debug.apk`.

هاد APK للتجربة، ماشي نسخة موقعة للنشر فـPlay Store. ما اعتبرناش الـAPK مبني قبل نجاح workflow.

## الحماية

- مفتاح Supabase الموجود فـindex.html هو `publishable` عمومي؛ ما كاينش `service_role` سري.
- تفعيل RLS فقاعدة البيانات؛ خاص اختبار مستخدمين حقيقيين فحسابين مختلفين.
- سياسة الخصوصية/الشروط، التبليغات والإشراف على المحتوى محتاجين اختبار ومراجعة قبل الإطلاق العام.
- حسابات Auth وتأكيد الإيميل خاصهم ضبط Site URL وRedirects للعنوان النهائي.
- GitHub Pages ماشي الحل المثالي كمضيف نهائي لسوق تجاري؛ هو للبريفيو ديال المشروع.

## نظام العمل

- `index.html` فيه الواجهة المميزة والمحتوى التجريبي وخاصية التبديل الاختياري إلى Supabase.
- `package.json`, `capacitor.config.json`, `scripts/build.mjs`: تجهيز Android باستعمال Capacitor.
- `.github/workflows/android-debug.yml`: بناء APK مجاني ضمن حدود GitHub Actions.
