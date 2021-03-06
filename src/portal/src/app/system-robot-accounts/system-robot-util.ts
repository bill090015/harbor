import { Robot } from "../../../ng-swagger-gen/models/robot";
import { Access } from "../../../ng-swagger-gen/models/access";
import { Project } from "../../../ng-swagger-gen/models/project";

export  interface FrontRobot extends Robot {
    permissionScope?: {
        coverAll?: boolean,
        access?: Array<Access>;
    };
}

export  interface FrontProjectForAdd extends Project {
    permissions?: Array<{
        kind?: string;
        namespace?: string;
        access?: Array<FrontAccess>;
    }>;
}

export  interface FrontAccess extends Access {
    checked?: boolean;
}


export enum PermissionsKinds {
    PROJECT = 'project',
    SYSTEM = 'system'
}

export enum Resource {
    ARTIFACT = 'repository',
    HELM_CHART = 'helm-chart',
    HELM_CHART_VERSION = 'helm-chart-version'
}

export enum Action {
    PUSH = 'push',
    PULL = 'pull',
    READ = 'read',
    CREATE = 'create'
}

export const NAMESPACE_ALL_PROJECTS: string = '*';

export const INITIAL_ACCESSES: FrontAccess[] = [
    {
        "resource": "repository",
        "action": "push",
        "checked": true
    },
    {
        "resource": "repository",
        "action": "pull",
        "checked": true
    },
    {
        "resource": "helm-chart",
        "action": "read",
        "checked": true
    },
    {
        "resource": "helm-chart-version",
        "action": "create",
        "checked": true
    }
];

export const ACTION_RESOURCE_I18N_MAP = {
    'push': 'ROBOT_ACCOUNT.PUSH',
    'pull': 'ROBOT_ACCOUNT.PULL',
    'read': 'SYSTEM_ROBOT.READ',
    'create': 'SYSTEM_ROBOT.CREATE',
    'repository': 'SYSTEM_ROBOT.ARTIFACT',
    'helm-chart': 'SYSTEM_ROBOT.HELM',
    'helm-chart-version': 'SYSTEM_ROBOT.HELM_VERSION'
};

export enum ExpirationType {
    DEFAULT= 'default',
    DAYS = 'days',
    NEVER = 'never'
}

