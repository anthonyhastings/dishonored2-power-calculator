#/bin/bash

yarn run lint && yarn test && bash -c "bash <(curl -s https://codecov.io/bash)"