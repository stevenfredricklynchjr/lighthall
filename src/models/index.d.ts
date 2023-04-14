import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerClickCount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ClickCount, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clickDB: string;
  readonly count: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyClickCount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ClickCount, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly clickDB: string;
  readonly count: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ClickCount = LazyLoading extends LazyLoadingDisabled ? EagerClickCount : LazyClickCount

export declare const ClickCount: (new (init: ModelInit<ClickCount>) => ClickCount) & {
  copyOf(source: ClickCount, mutator: (draft: MutableModel<ClickCount>) => MutableModel<ClickCount> | void): ClickCount;
}