/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, CardHeader, DescriptionList, DescriptionListDescription, DescriptionListGroup, DescriptionListTerm, ExpandableSection, Grid, GridItem, Page, PageSection, Title } from "@patternfly/react-core"
import { ChartBullet } from '@patternfly/react-charts';
import { PlusCircleIcon } from '@patternfly/react-icons';
import { Table, Tbody, Td, Th, Thead, Tr } from '@patternfly/react-table';

export const AddressDetailedView: React.FunctionComponent = (navigate) => {

    const [ detailToggled, setDetailToggled ] = useState(true);
    const [ bindingsToggled, setBindingsToggled ] = useState(false);


    return (
         <PageSection>
            <Title headingLevel='h1'>Address: myAddress</Title>
            <ExpandableSection toggleTextExpanded='Detail' toggleTextCollapsed='Detail' isExpanded={detailToggled} onToggle={() => setDetailToggled(!detailToggled)}>
            <Grid hasGutter span={6}>
                <GridItem span={4}>
                    <Card isCompact>
                        <CardHeader>Overview</CardHeader>
                        <CardBody>
                        <div style={{ height: '200px', width: '600px' }}>
                            <ChartBullet
                                ariaDesc="Address Size"
                                ariaTitle="Address Size"
                                comparativeWarningMeasureData={[{name: 'Warning', y: 88000}]}
                                comparativeWarningMeasureLegendData={[{ name: 'Page Limit' }]}
                                constrainToVisibleArea
                                height={200}
                                labels={({ datum }) => `${datum.name}: ${datum.y}`}
                                maxDomain={{y: 100000}}
                                name="chart2"
                                padding={{
                                    bottom: 50,
                                    left: 150, // Adjusted to accommodate labels
                                    right: 50,
                                    top: 50
                                }}
                                primarySegmentedMeasureData={[{ name: 'Measure', y: 55000 }]}
                                primarySegmentedMeasureLegendData={[{ name: 'Bytes Used' }]}
                                qualitativeRangeData={[{ name: 'Range', y: 88000 }]}
                                title="Messages"
                                width={600}
                            />
                        </div>
                        </CardBody>
                    </Card>
                    </GridItem>
                    <GridItem span={3}>
                        <Card>
                            <CardHeader>Metrics</CardHeader>
                            <CardBody>
                            <DescriptionList isHorizontal>
                                <DescriptionListGroup>
                                    <DescriptionListTerm>Message Count</DescriptionListTerm>
                                    <DescriptionListDescription>55555</DescriptionListDescription>
                                </DescriptionListGroup>
                                <DescriptionListGroup>
                                    <DescriptionListTerm>Paging</DescriptionListTerm>
                                    <DescriptionListDescription>True</DescriptionListDescription>
                                </DescriptionListGroup>
                                <DescriptionListGroup>
                                    <DescriptionListTerm>Pages</DescriptionListTerm>
                                    <DescriptionListDescription>0</DescriptionListDescription>
                                </DescriptionListGroup>
                                <DescriptionListGroup>
                                    <DescriptionListTerm>Queue Bindings</DescriptionListTerm>
                                    <DescriptionListDescription>
                                        <a href="#">4</a>
                                    </DescriptionListDescription>
                                </DescriptionListGroup>
                            </DescriptionList>
                            </CardBody>
                        </Card>
                    </GridItem>
                    <GridItem span={2}/>
                    <GridItem span={4}>
                        <Card isCompact>
                            <CardHeader>Details</CardHeader>
                            <CardBody>
                                <DescriptionList
                                    columnModifier={{
                                    default: '3Col'
                                    }}
                                >
                                    <DescriptionListGroup>
                                        <DescriptionListTerm>Name</DescriptionListTerm>
                                        <DescriptionListDescription>MyAddress</DescriptionListDescription>
                                    </DescriptionListGroup>
                                    <DescriptionListGroup>
                                        <DescriptionListTerm>Routing Types</DescriptionListTerm>
                                        <DescriptionListDescription>AnyCast</DescriptionListDescription>
                                    </DescriptionListGroup>
                                    <DescriptionListGroup>
                                        <DescriptionListTerm>Max Page Read Bytes</DescriptionListTerm>
                                        <DescriptionListDescription>777777</DescriptionListDescription>
                                    </DescriptionListGroup>
                                    <DescriptionListGroup>
                                        <DescriptionListTerm>Max Page Read Messages</DescriptionListTerm>
                                        <DescriptionListDescription>554443</DescriptionListDescription>
                                    </DescriptionListGroup>
                                    <DescriptionListGroup>
                                        <DescriptionListTerm>Prefetch Page Bytes</DescriptionListTerm>
                                        <DescriptionListDescription>77777</DescriptionListDescription>
                                    </DescriptionListGroup>
                                    <DescriptionListGroup>
                                        <DescriptionListTerm>Prefetch Page Messages</DescriptionListTerm>
                                        <DescriptionListDescription>444</DescriptionListDescription>
                                    </DescriptionListGroup>
                                </DescriptionList>
                            </CardBody>
                        </Card>
                    </GridItem>
                </Grid>
            </ExpandableSection>
            <ExpandableSection toggleTextExpanded='Queue Bindings(2)' toggleTextCollapsed='Queue Bindings(2)' isExpanded={bindingsToggled} onToggle={() => setBindingsToggled(!bindingsToggled)}>
            <Grid hasGutter span={6}>
                <GridItem span={4}>
                    <Card isCompact>
                            <CardHeader>Details</CardHeader>
                            <CardBody>
                                <Table variant='compact'>
                    <Thead>
                        <Td>id</Td>
                        <Td>name</Td>
                        <Td>message count</Td>
                        <Td>consumers</Td>
                        <Td>producers</Td>
                    </Thead>
                    <Tbody>
                        <Tr>
                        <Th>foo</Th>
                        <Th>foo</Th>
                        <Th>10000000</Th>
                        <Th>1</Th>
                        <Th>1</Th>
                        <Th><Button>purge</Button>{' '}<Button>delete</Button></Th>
                        </Tr>
                        <Tr>
                        <Th>foo</Th>
                        <Th>foo</Th>
                        <Th>10000000</Th>
                        <Th>1</Th>
                        <Th>1</Th>
                        <Th><Button>purge</Button>{' '}<Button>delete</Button></Th>
                        </Tr>
                    </Tbody>
                </Table>
                </CardBody>
                </Card>
                </GridItem>
                </Grid>
            </ExpandableSection>
            <ExpandableSection toggleTextExpanded='Create Queue' toggleTextCollapsed='Create Queue'>
            </ExpandableSection>
         </PageSection>
    )
}