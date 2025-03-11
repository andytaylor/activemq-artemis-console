/*
 * Copyright 2009-2024 Roland Huss
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { describe, expect, test } from "@jest/globals"
import { artemisService } from "./artemis-service";
import { SortDirection } from './table/ArtemisTable'

/**
 * A set of tests that run against a running broker instance to test the integration API
 */
describe("Artemis Service basic tests", () => {

    test("Jolokia instance creation", async () => {
      let addresses = await artemisService.getAddresses(1, 50, { id: "0", order: SortDirection.ASCENDING }, { column: "", operation: "", input: "" })
      .catch((error: unknown) => error);
      expect(addresses).toContain("DLQ");
    })
})