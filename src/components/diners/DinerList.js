import React from 'react';
import DinerShow from './DinerShow';
import { Container, Grid, } from 'semantic-ui-react';
const DinerList = ({ diners }) => (
  <Container>
    <Grid columns={3} doubling>
      <Grid.Row>
        { diners.map( d => <DinerShow key={d.id} {...d} />)}
      </Grid.Row>
    </Grid>
    {/* { diners.map( d => <DinerShow key={d.id} name={d.name} address={d.address} />)} */}
  </Container>
)
export default DinerList;