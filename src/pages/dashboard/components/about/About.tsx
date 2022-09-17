import React from 'react';
import { Divider, Text } from '@chakra-ui/react';
import { DEFAULT_PAPER_STYLE, Paper } from '../../../../components';

export const About = () => (
  <Paper bg={'#f7f7f7'} sx={{ ...DEFAULT_PAPER_STYLE, p: 5 }}>
    <Text fontSize="3xl" pb={2}>A propos de cette application</Text>
    <Divider />

    L'application suivante est une application de
    présence avec reconnaissance faciale

    Globalement, le principe est le suivant : une premiere page permettra de se connecter via login et password.
    Cela fait, on aura une interface qui nous permettra de séléctionner le cours choisi ou de créer un autre événement
    (avec tous les parametres/informations correspondant au cours/événement), puis il pourra entamer la présence.

    La présence faciale, la fonctionnalité principale de l'applicaiton, se fera par de manière suivante :
    on aura un interface qui permettra de prendre l'étudiant/le participant en photo, cette photo sera ensuite
    comparée avec une autre et à l'issue de cette operation, le statut (présent, absent, "expected") de l'etudiant/participant
    sera déterminé. Les outils pour la reconnaissance faciale et la photo à comparer sont S3 et aws rekognition.
  </Paper>
);
