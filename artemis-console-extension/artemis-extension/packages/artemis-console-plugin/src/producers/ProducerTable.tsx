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
import React, { } from 'react'
import { Navigate } from '../views/ArtemisTabView.js';
import { ActiveSort, ArtemisTable, Column, Filter } from '../table/ArtemisTable';
import { artemisService } from '../artemis-service';
import { columnStorage } from '../artemis-preferences-service';

export const ProducerTable: React.FunctionComponent<Navigate> = navigate => {
  const getSessionFilter = (row: any) => {
    var filter: Filter = {
      column: 'id',
      operation: 'EQUALS',
      input: row.session
    }
    return filter;
  }

  const getAddressFilter = (row: any) => {
    var filter: Filter = {
      column: 'name',
      operation: 'EQUALS',
      input: row.address
    }
    return filter;
  }

    const allColumns: Column[] = [
        {id: 'id', name: 'ID', visible: false, sortable: true, filterable: true},
        {id: 'name', name: 'Name', visible: true, sortable: true, filterable: true},
        {id: 'session', name: 'Session', visible: true, sortable: true, filterable: true, filter: getSessionFilter, filterTab: 2},
        {id: 'clientID', name: 'Client ID', visible: true, sortable: true, filterable: true},
        {id: 'user', name: 'User', visible: true, sortable: true, filterable: true},
        {id: 'address', name: 'Address', visible: true, sortable: true, filterable: true, filter: getAddressFilter, filterTab: 5},
        {id: 'validatedUser', name: 'Validated User', visible: true, sortable: true, filterable: true},
        {id: 'protocol', name: 'Protocol', visible: true, sortable: true, filterable: true},
        {id: 'localAddress', name: 'Local Address', visible: true, sortable: true, filterable: true},
        {id: 'remoteAddress', name: 'Remote Address', visible: true, sortable: true, filterable: true},
        {id: 'msgSent', name: 'Messages Sent', visible: false, sortable: true, filterable: false},
        {id: 'msgSizeSent', name: 'Messages Sent Size', visible: false, sortable: true, filterable: false},
        {id: 'lastProducedMessageID', name: 'Last Produced Message ID', visible: false, sortable: true, filterable: false},
      ];

      const listProducers = async ( page: number, perPage: number, activeSort: ActiveSort, filter: Filter):Promise<any> => {
        const response = await artemisService.getProducers(page, perPage, activeSort, filter);
        const data = JSON.parse(response);
        return data;
      }
      
    return <ArtemisTable allColumns={allColumns} getData={listProducers} storageColumnLocation={columnStorage.producers} navigate={navigate.search} filter={navigate.filter}/>
}