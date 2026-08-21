import type { Metadata } from "next";
import { PolicyView, type PolicySection } from "../view";

export const metadata: Metadata = {
  title: "GuessWho Privacy Policy | WeLean Technology",
  description:
    "Privacy policy for GuessWho (top.welean.guesswho) and WeLean Technology services.",
};

const sections: PolicySection[] = [
  {
    title: "适用范围 / Scope",
    paragraphs: [
      <p key="zh">
        本政策适用于 GuessWho（应用包名：<code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">top.welean.guesswho</code>）以及本页面所说明的 WeLean Technology 服务。
      </p>,
      <p key="en">
        This policy applies to GuessWho (package name <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-slate-800">top.welean.guesswho</code>) and the WeLean Technology services described on this website.
      </p>,
    ],
  },
  {
    title: "本地处理 / Local processing",
    paragraphs: [
      <p key="zh">
        GuessWho 是一款猜头像游戏。游戏进度、成绩、设置和其他所有游戏数据仅保存在设备本地，不会上传到 WeLean Technology 的服务器，也不与云端同步。游戏不要求注册账号。
      </p>,
      <p key="en">
        GuessWho is a guess-the-avatar game. Game progress, scores, settings, and all other game data are stored locally on the device only; they are never uploaded to WeLean Technology servers or synced to the cloud. The game does not require an account.
      </p>,
    ],
  },
  {
    title: "广告 / Advertising",
    paragraphs: [
      <p key="zh">
        GuessWho 免费提供并包含第三方广告。广告由第三方广告 SDK 按照其自身的隐私政策展示；该 SDK 可能收集设备标识符（如广告 ID）等有限信息，用于展示和优化广告。您可以在 Android 系统设置中重置广告标识符或关闭个性化广告。
      </p>,
      <p key="en">
        GuessWho is free and contains third-party advertising. Ads are delivered by a third-party advertising SDK under its own privacy policy; the SDK may collect limited information such as device identifiers (for example, the advertising ID) to deliver and optimize ads. You can reset your advertising ID or opt out of personalized ads in Android settings.
      </p>,
    ],
  },
  {
    title: "收集与共享 / Collection and sharing",
    paragraphs: [
      <p key="zh">
        除广告 SDK 按照其自身隐私政策处理的有限信息外，GuessWho 不收集任何用户信息，包括个人账号、姓名、邮箱、电话号码、位置、联系人、通讯录或支付信息，也不使用分析或崩溃上报 SDK。应用不会出售、出租或向第三方共享用户数据。
      </p>,
      <p key="en">
        Apart from limited information handled by the advertising SDK under its own privacy policy, GuessWho does not collect any user information, including account information, names, email addresses, phone numbers, location, contacts, or payment information. It does not use analytics or crash-reporting SDKs, and does not sell, rent, or share user data with third parties.
      </p>,
    ],
  },
  {
    title: "数据删除 / Data deletion",
    paragraphs: [
      <p key="zh">
        所有游戏数据都保存在设备本地。在系统设置中清除应用存储可立即删除全部本地数据；卸载应用即可彻底删除所有游戏数据。
      </p>,
      <p key="en">
        All game data is stored on the device. Clearing the app&apos;s storage in system settings removes all local data immediately, and uninstalling the app permanently deletes all game data.
      </p>,
    ],
  },
  {
    title: "儿童隐私 / Children&apos;s privacy",
    paragraphs: [
      <p key="zh">
        GuessWho 不是专门面向儿童设计的应用，也不会主动收集儿童个人信息。家长或监护人如发现个人信息被误提交，请通过下方邮箱联系我们。
      </p>,
      <p key="en">
        GuessWho is not designed specifically for children and does not knowingly collect children&apos;s personal information. Parents or guardians may contact us if personal information was submitted inadvertently.
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

export default function GuessWhoPrivacyPage() {
  return (
    <PolicyView
      activeSlug="guesswho"
      subtitle={
        <>
          GuessWho and the services operated by WeLean Technology are designed
          to keep all game data on the user&apos;s device.
        </>
      }
      updatedAt="August 21, 2026 / 2026 年 8 月 21 日"
      summary={
        <>
          <strong>简要说明：</strong> GuessWho 是一款猜头像游戏。游戏不要求账号，所有游戏数据仅保存在用户设备本地；除广告 SDK 按其自身政策处理的有限信息外，我们不收集任何用户信息。
          <br />
          <strong>Summary:</strong> GuessWho is a guess-the-avatar game. It requires no account, and all game data stays on the user&apos;s device. Apart from limited information handled by the advertising SDK under its own policy, we collect no user information.
        </>
      }
      sections={sections}
    />
  );
}
