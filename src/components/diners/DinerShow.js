import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
const DinerShow = ({ id, name, address, hours }) => (
  <Grid.Column>
    <Card>
      <Card.Content header={name} />
      <Card.Content>
        {address}
      </Card.Content>
      <Card.Content extra>
        {hours}
      </Card.Content>
    </Card>
  </Grid.Column>
)
export default DinerShow;