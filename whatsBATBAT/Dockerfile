RUN git clone https://github.com/valco72/WhatsBATBAT /root/WhatsBATBAT
WORKDIR /root/WhatsBATBAT/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
