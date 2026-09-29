"use client";

import { useConsent } from "@/components/consent-context";
import { company } from "@/lib/company";

export function AccessMap() {
  const { consent, save, openSettings } = useConsent();
  if (consent?.maps) {
    return <iframe className="map-frame" title="Plan d’accès Beattie Sols, La Mézière" src={company.mapsSrc} loading="lazy" />;
  }
  return (
    <div className="media-hold">
      <p>
        Le plan d’accès est proposé par Google Maps. Il n’est pas affiché tant que vous n’avez pas accepté ce service, car il
        dépose des cookies.
      </p>
      <p>{company.shortAddress}</p>
      <div className="cookie-actions">
        <button
          type="button"
          className="btn blue"
          onClick={() => save({ analytics: consent?.analytics ?? false, maps: true, video: consent?.video ?? false })}
        >
          Afficher la carte
        </button>
        <button type="button" className="btn ghost" onClick={openSettings}>
          Personnaliser
        </button>
      </div>
    </div>
  );
}

export function VimeoFilm() {
  const { consent, save, openSettings } = useConsent();
  if (consent?.video) {
    return <iframe className="video-frame" title="Une journée ordinaire chez Beattie Sols" src={company.vimeoSrc} allow="fullscreen; picture-in-picture" allowFullScreen />;
  }
  return (
    <div className="media-hold video-hold">
      <p>Une journée ordinaire chez Beattie Sols.</p>
      <p>Cette vidéo est hébergée par Vimeo. Le lecteur n’est chargé qu’avec votre accord.</p>
      <div className="cookie-actions">
        <button
          type="button"
          className="btn blue"
          onClick={() => save({ analytics: consent?.analytics ?? false, maps: consent?.maps ?? false, video: true })}
        >
          Lire la vidéo
        </button>
        <button type="button" className="btn ghost" onClick={openSettings}>
          Personnaliser
        </button>
      </div>
    </div>
  );
}
