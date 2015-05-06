<?php
protected function buildAssocArray(array $objectsData, array $groupingParams = [])
    {
        $result = [];
        foreach ($objectsData as $objectData) {
            $result = array_replace_recursive($result, $this->buildGroupedObject($objectData, $groupingParams));
        }
        return $result;
    }

    private function buildGroupedObject(array $objectData, array $groupingParams, $counter = 0)
    {
        if($counter === count($groupingParams) - 1) {
            return [$objectData[$groupingParams[$counter]] => $this->buildObject($objectData)];
        }
        return [$objectData[$groupingParams[$counter]] => $this->buildGroupedObject($objectData, $groupingParams, $counter+1)];
    }