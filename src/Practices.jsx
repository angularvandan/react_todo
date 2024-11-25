export const Practices = () => {

    const student = [1];
    return (
        <div>
            <p>{!student.length && "No Student Found"}</p>
            <p>Number of students: {student.length }</p>
        </div>
    );
}