import React from "react";
import {
  useSidebarBreadcrumbs,
  useHomePageRoute,
} from "@docusaurus/theme-common/internal";
import useBaseUrl from "@docusaurus/useBaseUrl";
import IconHome from "@theme/Icon/Home";

import styles from "./styles.module.css";

function HomeBreadcrumbItem() {
  const homeHref = useBaseUrl("/");
  return (
    <li>
      <a className="fr-breadcrumb__link" href={homeHref}>
        <IconHome className={styles.breadcrumbHomeIcon} />
      </a>
    </li>
  );
}

export default function DocBreadcrumbs(): JSX.Element | null {
  const breadcrumbs = useSidebarBreadcrumbs();
  const homePageRoute = useHomePageRoute();

  if (!breadcrumbs) {
    return null;
  }

  return (
    <nav
      role="navigation"
      className="fr-breadcrumb"
      aria-label="vous êtes ici :"
    >
      <button
        className="fr-breadcrumb__button"
        aria-expanded="false"
        aria-controls="breadcrumb-1"
      >
        Voir le fil d’Ariane
      </button>
      <div className="fr-collapse" id="breadcrumb-1">
        <ol className="fr-breadcrumb__list">
          {homePageRoute && <HomeBreadcrumbItem />}
          {breadcrumbs.map((item, idx) => {
            return (
              <li key={idx}>
                <a className="fr-breadcrumb__link" href={item.href}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
