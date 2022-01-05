export const getRepliesByUser = (cms, query) => {
    let find = "";
    // search for comment by user
    const res = cms.find(c => c.user.username === query);
    if (res) return res;
    // search replyingTo in replies
    cms.forEach(c => {
        if (c.replies.length > 0) {
            find = c.replies.find(r => r.user.username === query);
        }
    });

    return getRepliesByUser(cms, find.replyingTo);
};

// export const getRepliesByUser = (cms, query) => {
//     let find = "";

//     cms.forEach(c => {
//         if (c.replies.length > 0) {
//             find = c.replies.find(r => r.user.username === query.replyingTo);
//         }
//     });
//     const findCm = cms.find(c => c.user.username === find.replyingTo);
//     return findCm;
// };
