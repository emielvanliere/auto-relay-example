const PORT = Number(process.env.PORT) || 8080;

import bootstrap from "./app/app";

bootstrap().then((app) => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
});
