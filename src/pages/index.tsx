import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React, { useCallback, useState } from "react"
import customFields from "../config/customFields"

import Button from "@theme/Button"
import Layout from "../theme/Layout"
import SvgImage from "../components/SvgImage"

import doCss from "../css/index/docker.module.css"

import juCss from "../css/index/jumbotron.module.css"
import meCss from "../css/index/menu.module.css"
import prCss from "../css/property.module.css"
import seCss from "../css/section.module.css"

import GithubLogo from "../assets/img/github.svg"
import DockerLogo from "../assets/img/pages/index/docker.svg"

const FeatureTabs = () => {
  const [opened, setOpened] = useState<"optimised" | "features" | "integration">(
    "optimised",
  )
  const handleClickIs = useCallback(() => {
    setOpened("optimised")
  }, [])
  const handleClickGoodFor = useCallback(() => {
    setOpened("features")
  }, [])
  const handleClickIsNot = useCallback(() => {
    setOpened("integration")
  }, [])

  return (
    <section className={clsx(seCss.section, seCss["section--odd"])}>
      <div className={clsx(seCss["section--inner"], seCss["section--center"])}>
        <h2
          className={clsx(
            seCss.section__title,
            seCss["section__title--wide"],
            "text--center",
          )}
        >
          Why ESX?
        </h2>

        <div
          className={clsx(
            seCss.section__footer,
            seCss["section__footer--feature-tabs"],
          )}
        >
          <div className={meCss.menu__list}>
            <Button
              className={meCss.menu__button}
              onClick={handleClickIs}
              size="small"
              variant={opened === "optimised" ? "primary" : "tertiary"}
            >
              Optimisation
            </Button>
            <Button
              className={meCss.menu__button}
              onClick={handleClickGoodFor}
              size="small"
              variant={opened === "features" ? "primary" : "tertiary"}
            >
              Features
            </Button>
            <Button
              className={meCss.menu__button}
              onClick={handleClickIsNot}
              size="small"
              variant={opened === "integration" ? "primary" : "tertiary"}
            >
              Integration
            </Button>
          </div>

          <div className={meCss.menu__content}>
            <div
              className={clsx(meCss.menu__panel, {
                [meCss["menu__panel--active"]]: opened === "optimised",
              })}
            >
              <p className={prCss.property}>0.00ms base</p>
              <p className={prCss.property}>Oxmysql</p>
              <p className={prCss.property}>Statebags</p>
              <p className={prCss.property}>Optimised Functions</p>
            </div>

            <div
              className={clsx(meCss.menu__panel, {
                [meCss["menu__panel--active"]]: opened === "features",
              })}
            >
              <p className={prCss.property}>Gamemode Support</p>
              <p className={prCss.property}>Easy To Use functions</p>
              <p className={prCss.property}>Dynamic PlayerData</p>
              <p className={prCss.property}>Wide Compatibilty</p>
            </div>

            <div
              className={clsx(meCss.menu__panel, {
                [meCss["menu__panel--active"]]: opened === "integration",
              })}
            >
              <p className={prCss.property}>New Releases Daily</p>
              <p className={prCss.property}>Widely Adopted/</p>
              <p className={prCss.property}>Easy To Adapt</p>
              <p className={prCss.property}>Easy to install</p>
              <p className={prCss.property}>Txadmin Intergration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const Top = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <section
      className={clsx(seCss["section--inner"], seCss["section--slim--accent"])}
    >
      <div className={juCss.jumbotron}>
        <h1
          className={clsx(
            seCss.section__title,
            seCss["section__title--jumbotron"],
            seCss["section__title--accent"],
          )}
        >
          ESX Framework
        </h1>

        <p
          className={clsx(
            seCss.section__subtitle,
            seCss["section__subtitle--jumbotron"],
            seCss["section__subtitle--accent"],
          )}
        >
          {siteConfig.tagline}
        </p>

        <div className={juCss.jumbotron__cta}>
          <Button className={juCss.jumbotron__link} href={customFields.demoUrl}>
            Live Demo
          </Button>
          <Button
            className={clsx(
              juCss.jumbotron__link,
              juCss["jumbotron__cta--github"],
            )}
            href={customFields.githubUrl}
            icon={<SvgImage image={<GithubLogo />} title="GitHub" />}
            variant="secondary"
          >
            GitHub
          </Button>
        </div>
      </div>

      <div className={doCss.docker}>
        <pre className={doCss.docker__inner}>
          <code className={doCss.docker__code}>
            {`cd resources
git clone https://github.com/esx-framework/esx-legacy`}
          </code>
          <a
            href={customFields.dockerUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
          </a>
        </pre>
      </div>
    </section>
  )
}

const Home = () => {
  const title = "ESX-Framework | FiveM Framework"

  return (
    <Layout
      canonical=""
      description={customFields.description}
      title={title}
      replaceTitle
    >
      <Top />
      <FeatureTabs />
    </Layout>
  )
}

export default Home
