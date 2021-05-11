RUN git clone https://github.com/valco72/WhatsBATBATBAT /root/WhatsBATBATBAT
WORKDIR /root/WhatsBATBATBAT/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
