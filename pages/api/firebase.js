import { initializeApp } from 'firebase/app';
import { get, getDatabase, ref } from 'firebase/database';

const db = getDatabase(
	initializeApp({
		apiKey: 'AIzaSyCj0rCfG4QW-C0izlTymypNeFiyCig9-ZI',
		authDomain: 'personal-website-datastore.firebaseapp.com',
		databaseURL: 'https://personal-website-datastore-default-rtdb.europe-west1.firebasedatabase.app',
		projectId: 'personal-website-datastore',
		storageBucket: 'personal-website-datastore.appspot.com',
		messagingSenderId: '789429832742',
		appId: '1:789429832742:web:1599ee34e0ab7413f52ae7',
	}),
);

export const getMainSkills = () => get(ref(db, 'about/skills/main')).then((s) => s.val());

export const getOtherSkills = () => get(ref(db, 'about/skills/other')).then((s) => s.val());

export const getFormalEducation = () => get(ref(db, 'education/formal')).then((s) => s.val());

export const getOnlineEducation = () => get(ref(db, 'education/online')).then((s) => s.val());

export const getPinnedProjects = async () => {
	const pinnedRefData = await get(ref(db, 'projects/pinned')).then((s) => s.val());

	const promises = [];
	Object.keys(pinnedRefData).forEach((key) => {
		promises.push(get(ref(db, `projects/summary/${key}`)));
	});

	const resolves = await Promise.allSettled(promises);
	const details = resolves.map((resolve) => {
		let dataVal = resolve.value.val();
		delete dataVal['tags'];
		return dataVal;
	});

	return Object.entries(pinnedRefData).map(([key, data], index) => ({ ...data, ...details[index], name: key }));
};

export const getAchievements = () => get(ref(db, 'achievements/')).then((s) => s.val());

export const obj2arr = (obj) =>
	Object.entries(obj)
		.sort(([aK, aV], [bK, bV]) => aV.sort - bV.sort)
		.map(([k, v]) => ({ name: k, ...v }));

export const getProject = (pid) => get(ref(db, `projects/detailed/${pid}`)).then((s) => s.val());
