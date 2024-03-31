import {Iframe} from 'sanity-plugin-iframe-pane'

function getPreviewUrl(doc) {
  return doc?.slug?.current
    ? `${window.location.host}/${doc.slug.current}`
    : `${window.location.host}`;
}

export const defaultDocumentNode = (S, { schemaType }) => {
  switch (schemaType) {
    case 'post':
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc) => getPreviewUrl(doc),
          })
          .title('Preview'),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};