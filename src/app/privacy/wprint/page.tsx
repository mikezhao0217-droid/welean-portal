import type { Metadata } from "next";
import { PolicyView, type PolicySection } from "../view";

export const metadata: Metadata = {
  title: "WPrint Privacy Policy | WeLean Technology",
  description:
    "Privacy policy for WPrint (top.welean.wprint) and WeLean Technology services.",
};

const sections: PolicySection[] = [
  {
    title: "适用范围 / Scope",
    paragraphs: [
      <p key="zh">
        本政策适用于 WPrint（应用包名：<code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">top.welean.wprint</code>）以及本页面所说明的 WeLean Technology 服务。
      </p>,
      <p key="en">
        This policy applies to WPrint (package name <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">top.welean.wprint</code>) and the WeLean Technology services described on this website.
      </p>,
    ],
  },
  {
    title: "本地处理 / Local processing",
    paragraphs: [
      <p key="zh">
        WPrint 可以读取用户通过 Android 文件选择器主动选择的 PDF、Word、Excel、PowerPoint、图片和文本文件，用于排版、转换、照片处理和打印。文件内容不会上传到 WeLean Technology 的服务器。
      </p>,
      <p key="en">
        WPrint may read PDFs, Word, Excel, PowerPoint, image, and text files that the user explicitly selects through the Android file picker for layout, conversion, photo processing, and printing. File contents are not uploaded to WeLean Technology servers.
      </p>,
    ],
  },
  {
    title: "收集与共享 / Collection and sharing",
    paragraphs: [
      <p key="zh">
        WPrint 不收集个人账号、姓名、邮箱、电话号码、位置、联系人、通讯录、广告标识符或支付信息，也不使用分析、崩溃上报或广告 SDK。应用不会出售、出租或向第三方共享用户数据。
      </p>,
      <p key="en">
        WPrint does not collect account information, names, email addresses, phone numbers, location, contacts, advertising identifiers, or payment information. It does not use analytics, crash-reporting, or advertising SDKs, and does not sell, rent, or share user data with third parties.
      </p>,
    ],
  },
  {
    title: "临时文件与保存 / Temporary files and saving",
    paragraphs: [
      <p key="zh">
        转换和预览过程中产生的临时文件保存在应用缓存目录中，并可由系统或应用自动清理。用户主动选择“保存到图库”或导出文件时，文件会写入 Android 系统提供的位置。
      </p>,
      <p key="en">
        Temporary conversion and preview files are stored in the app cache and may be removed by the system or the app. When the user explicitly chooses to save an image or export a file, it is written to a location provided by Android.
      </p>,
    ],
  },
  {
    title: "系统服务与备份 / System services and backup",
    paragraphs: [
      <p key="zh">
        打印操作会通过 Android 系统打印服务完成；该服务可能按照其自身的隐私政策处理打印任务。Android 设备备份功能也可能按照用户的系统设置备份有限的应用偏好设置。
      </p>,
      <p key="en">
        Printing is completed through Android&apos;s system print service, which may handle print jobs under its own privacy policy. Android device backup may back up limited app preferences according to the user&apos;s device settings.
      </p>,
    ],
  },
  {
    title: "儿童隐私 / Children&apos;s privacy",
    paragraphs: [
      <p key="zh">
        WPrint 不是专门面向儿童设计的应用，也不会主动收集儿童个人信息。家长或监护人如发现个人信息被误提交，请通过下方邮箱联系我们。
      </p>,
      <p key="en">
        WPrint is not designed specifically for children and does not knowingly collect children&apos;s personal information. Parents or guardians may contact us if personal information was submitted inadvertently.
      </p>,
    ],
  },
  {
    title: "政策更新与联系我们 / Updates and contact",
    paragraphs: [
      <p key="zh">
        我们可能在功能或法律要求变化时更新本政策，并在本页面公布最新版本。隐私问题、删除请求或其他反馈请发送至：
      </p>,
      <p key="en">
        We may update this policy when our features or legal requirements change. The latest version will be published on this page. For privacy questions, deletion requests, or feedback, contact:
      </p>,
      <a
        key="mail"
        className="inline-flex rounded-lg bg-blue-50 px-3 py-2 font-medium text-blue-700 transition hover:bg-blue-100"
        href="mailto:mike.zhao@welean.top"
      >
        mike.zhao@welean.top
      </a>,
    ],
  },
];

export default function WPrintPrivacyPage() {
  return (
    <PolicyView
      activeSlug="wprint"
      subtitle={
        <>
          WPrint and the services operated by WeLean Technology are designed
          to keep user files on the user&apos;s device.
        </>
      }
      updatedAt="August 8, 2026 / 2026 年 8 月 8 日"
      summary={
        <>
          <strong>简要说明：</strong> WPrint 不要求账号、不含广告，用户选择的照片、PDF、Office 文档和其他文件仅在设备本地处理。
          <br />
          <strong>Summary:</strong> WPrint does not require an account, does not contain advertising, and processes selected photos, PDFs, Office documents, and other files locally on the device.
        </>
      }
      sections={sections}
    />
  );
}
