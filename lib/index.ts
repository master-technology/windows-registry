/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

let windowsRegistry: any;
export function setWindowsRegistry(nativeNodefile: any): void {
	if (nativeNodefile != null) {
		windowsRegistry = nativeNodefile;
	}
}

export function loadWindowsRegistry(path='./winregistry.node'): boolean {
	if (windowsRegistry == null) {
		windowsRegistry = process.platform === 'win32' ? require(path) : null;
	}
	if (!windowsRegistry) {
		console.error('Could not initialize Windows Registry native node module.');
		return false;
	}
	return true;
}

export type HKEY = "HKEY_CURRENT_USER" | "HKEY_LOCAL_MACHINE" | "HKEY_CLASSES_ROOT" | "HKEY_USERS" | "HKEY_CURRENT_CONFIG";

export function EnumRegKeyKeys(hive: HKEY, path: string) : string[] {
	if (!windowsRegistry) {
		if (!loadWindowsRegistry()) { return []; }
	}
	return windowsRegistry.EnumRegKeyKeys(hive, path);
}

export function EnumRegKeyValues(hive: HKEY, path: string) : string[] {
	if (!windowsRegistry) {
		if (!loadWindowsRegistry()) { return []; }
	}
	return windowsRegistry.EnumRegKeyValues(hive, path);
}

export function GetStringRegKey(hive: HKEY, path: string, name: string): string | undefined {
	if (!windowsRegistry) {
		if (!loadWindowsRegistry()) { return undefined; }
	}
    return windowsRegistry.GetStringRegKey(hive, path, name);
}

export function SetStringRegKey(hive: HKEY, path: string, name: string, value: string) : void {
	if (!windowsRegistry) {
		if (!loadWindowsRegistry()) { return; }
	}
	windowsRegistry.SetStringRegKey(hive, path, name, value);
}

export function DeleteRegKeyKey(hive: HKEY, path: string, name: string) : void {
	if (!windowsRegistry) {
		if (!loadWindowsRegistry()) { return; }
	}
    windowsRegistry.DeleteRegKeyKey(hive, path, name);
}

export function DeleteRegKeyValue(hive: HKEY, path: string, name: string) : void {
	if (!windowsRegistry) {
		if (!loadWindowsRegistry()) { return; }
	}
    windowsRegistry.DeleteRegKeyValue(hive, path, name);
}
