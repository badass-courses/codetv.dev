
import { db } from './index'
import {
	communicationChannel,
	communicationPreferenceTypes,
	contributionTypes,
	permissions,
	rolePermissions,
	roles,
} from './schema'

const currentContributionTypes = await db.query.contributionTypes.findMany()

console.log({ currentContributionTypes })

const seededContributionTypes = [
	{
		name: 'Author',
		slug: 'author',
		id: 'contribution_type_clt4wta5w000808l5c1qi0ud4',
	},

	{
		name: 'Editor',
		slug: 'editor',
		id: 'contribution_type_clt4wubil000908l50ikcd7dx',
	},
]

for (const seedType of seededContributionTypes) {
	console.log({ seedType })
	const existingContributionType = currentContributionTypes.find(
		(ct) => ct.slug === seedType.slug,
	)

	if (!existingContributionType) {
		await db.insert(contributionTypes).values(seedType)
	}
}

const currentRoles = await db.query.roles.findMany()

console.log({ currentRoles })

const seededRoles = [
	{
		name: 'admin',
		id: 'role_clt4wrrsf000708l57dekazpz',
	},
	{
		name: 'user',
		id: 'role_clt4wr3rb000608l5ganmfufy',
	},
	{
		name: 'contributor',
		id: 'role_clt5a97j7000008jp46bx6r62',
	},
]

for (const seedRole of seededRoles) {
	console.log({ seedRole })
	const existingRole = currentRoles.find((role) => role.name === seedRole.name)

	if (!existingRole) {
		await db.insert(roles).values(seedRole)
	}
}

const currentPermissions = await db.query.permissions.findMany()

console.log({ currentPermissions })

const seededPermissions = [
	{
		name: 'manage_all',
		id: 'permission_clt4wyrpb000a08l5a6xq44hk',
	},
	{
		name: 'create_content',
		id: 'permission_clu4sbes9000008id7fk53csk',
	},
	{
		name: 'view_content',
		id: 'permission_clu4sbum4000108id19170x80',
	},
]

for (const seedPermission of seededPermissions) {
	console.log({ seedPermission })
	const existingPermission = currentPermissions.find(
		(permission) => permission.name === seedPermission.name,
	)

	if (!existingPermission) {
		await db.insert(permissions).values(seedPermission)
	}
}

const currentRolePermissions = await db.query.rolePermissions.findMany()

console.log({ currentRolePermissions })

const seededRolePermissions = [
	{
		roleId: 'role_clt4wrrsf000708l57dekazpz',
		permissionId: 'permission_clt4wyrpb000a08l5a6xq44hk',
	},
	{
		roleId: 'role_clt5a97j7000008jp46bx6r62',
		permissionId: 'permission_clu4sbes9000008id7fk53csk',
	},
	{
		roleId: 'role_clt5a97j7000008jp46bx6r62',
		permissionId: 'permission_clu4sbum4000108id19170x80',
	},
]

for (const seedRolePermission of seededRolePermissions) {
	console.log({ seedRolePermission })

	const existingRolePermission = currentRolePermissions.find(
		(rp) =>
			rp.roleId === seedRolePermission.roleId &&
			rp.permissionId === seedRolePermission.permissionId,
	)

	if (!existingRolePermission) {
		await db.insert(rolePermissions).values(seedRolePermission)
	}
}

const currentCommunicationPreferenceTypes =
	await db.query.communicationPreferenceTypes.findMany()

const seededCommunicationPreferenceTypes = [
	{
		name: 'Newsletter',
		id: 'cpt_rwhtwq000208jph3jy2utu',
		description: 'Semi-Regular News and Updates',
	},
]

for (const seedPreferenceType of seededCommunicationPreferenceTypes) {
	const existingPreferenceType = currentCommunicationPreferenceTypes.find(
		(cpt) => cpt.name === seedPreferenceType.name,
	)

	if (!existingPreferenceType) {
		await db.insert(communicationPreferenceTypes).values(seedPreferenceType)
	}
}

const currentCommunicationChannels =
	await db.query.communicationChannel.findMany()

const seededCommunicationChannels = [
	{
		name: 'Email',
		id: 'cc_rwl5qg000008jr69rw2iww',
		description: 'Email Communication',
	},
]

for (const seedChannel of seededCommunicationChannels) {
	const existingChannel = currentCommunicationChannels.find(
		(cc) => cc.name === seedChannel.name,
	)

	if (!existingChannel) {
		await db.insert(communicationChannel).values(seedChannel)
	}
}
